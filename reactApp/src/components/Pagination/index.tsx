import React, {Component, cloneElement} from 'react';
import PropTypes from 'prop-types';
import * as CSS from 'csstype';

type EVENT = 'reload' | 'keep' | 'prev' | 'next' | 'prevAll' | 'lastALl' | 'first' | 'last';
const RELOAD: EVENT = 'reload';
const NO_RELOAD: EVENT = 'keep';
const PREV: EVENT = 'prev';
const NEXT: EVENT = 'next';
const PREV_ALL: EVENT = 'prevAll';
const NEXT_ALL: EVENT = 'lastALl';
const FIRST: EVENT = 'first';
const LAST: EVENT = 'last';

interface PaginationProps {
    currentPage: number,
    onClick?: (object) => void,
    total?: number,
    itemPerPage: number,
    maximumPage: number,
    className?: string,
    style?: CSS.Properties,
    children?: string
}

interface PaginationState {
    content: JSX.Element[],
    currentPage: number,
    event: EVENT
}

class Pagination extends Component<PaginationProps & typeof Pagination.defaultProps, PaginationState> {

    static displayName = 'Pagination';

    state: PaginationState = {
        content: [],
        currentPage: this.props.currentPage,
        event: RELOAD,
    };

    static defaultProps = {
        maximumPage: 5,
        itemPerPage: 10,
        currentPage: 1,
    };

    onChangePage = ({target}) => {
        const {onClick, total, itemPerPage} = this.props;

        if (!total) {
            return;
        }

        const TotalPage = Math.ceil(total / itemPerPage);
        let {currentPage} = this.state;
        const {content} = this.state;
        let event = RELOAD;
        const {page} = target.dataset;

        if (!page || parseInt(target.dataset.page) === currentPage) {
            return;
        }

        let firstKey: any = content[0]?.key;
        let lastKey: any = content[content.length - 1]?.key;

        firstKey = parseInt(firstKey);
        lastKey = parseInt(lastKey);

        switch (page) {
            case PREV:
                event = NO_RELOAD;
                if (currentPage > 1) {
                    if (firstKey === currentPage) {
                        event = PREV;
                    }
                    currentPage -= 1;
                }
                break;
            case NEXT:
                event = NO_RELOAD;

                if (currentPage < TotalPage) {
                    if (lastKey === currentPage) {
                        event = RELOAD;
                    }
                    currentPage += 1;
                }
                break;
            case PREV_ALL:
                currentPage = firstKey - 1;
                event = PREV;
                break;
            case NEXT_ALL:
                currentPage = lastKey + 1;
                event = RELOAD;
                break;
            case FIRST:
                if (currentPage !== 1) {
                    currentPage = 1;
                }

                event = RELOAD;
                break;
            case LAST:
                if (currentPage !== TotalPage) {
                    currentPage = TotalPage;
                }
                event = LAST;
                break;
            default:
                currentPage = parseInt(page);
                event = NO_RELOAD;
                break;
        }

        this.setState({currentPage, event});

        if (onClick) {
            onClick({currentPage});
        }
    };

    static getDerivedStateFromProps(props, state) {
        const {content, event, currentPage} = state;
        const {total, itemPerPage, maximumPage} = props;
        const TotalPage = Math.ceil(total / itemPerPage);

        const contentArr: JSX.Element[] = [];
        let newContent;

        if (event === LAST || event === PREV) {
            if (currentPage - maximumPage >= 0) {
                for (let i = currentPage - maximumPage + 1; i <= currentPage; i++) {
                    const element: JSX.Element =
                        i === currentPage ? (
                            <li className="footable-page active " key={i}>
                                <a data-page={i}>{i}</a>
                            </li>
                        ) : (
                            <li className="footable-page" key={i}>
                                <a data-page={i}>{i}</a>
                            </li>
                        );
                    contentArr.push(element);
                }
            } else {
                const totalPages = TotalPage > maximumPage ? maximumPage : TotalPage;

                for (let i = 1; i <= totalPages; i++) {
                    const element =
                        i === currentPage ? (
                            <li className="footable-page active " key={i}>
                                <a data-page={i}>{i}</a>
                            </li>
                        ) : (
                            <li className="footable-page" key={i}>
                                <a data-page={i}>{i}</a>
                            </li>
                        );
                    contentArr.push(element);
                }
            }
            newContent = contentArr;
        } else if (event === RELOAD) {
            const stopCondition =
                currentPage + maximumPage > TotalPage
                    ? TotalPage + 1
                    : maximumPage + currentPage;
            for (let i = currentPage; i < stopCondition; i++) {
                const element =
                    i === currentPage ? (
                        <li className="footable-page active " key={i}>
                            <a data-page={i}>{i}</a>
                        </li>
                    ) : (
                        <li className="footable-page" key={i}>
                            <a data-page={i}>{i}</a>
                        </li>
                    );
                contentArr.push(element);
            }
            newContent = contentArr;
        } else {
            newContent = content.map((currentValue, index) => {
                const {className, children} = currentValue.props;
                const dataPage = children.props['data-page'];
                let newElement = currentValue;
                let newClass = className;

                if (className) {
                    if (className.includes('active')) {
                        newClass = newClass.replace('active', '');
                    }
                    if (dataPage === parseInt(currentPage)) {
                        newClass += ' active';
                    }
                }

                newElement = cloneElement(currentValue, {className: newClass});
                return newElement;
            });
        }

        return {content: newContent};
    }

    render() {
        const {className, style, total, itemPerPage} = this.props;
        const {content} = this.state;

        if (!total) {
            return null;
        }

        const TotalPage = Math.ceil(total / itemPerPage);
        let isPrevElement: JSX.Element | null = null;
        let isNextElement: JSX.Element | null = null;
        if (content.length !== 0) {
            const firstKey = content[0].key;
            const lastKey = content[content.length - 1].key;

            isPrevElement =
                firstKey !== null && firstKey > 1 ? (
                    <li className="footable-page-arrow">
                        <a data-page={PREV_ALL}>...</a>
                    </li>
                ) : null;

            isNextElement =
                lastKey !== null && lastKey < TotalPage ? (
                    <li className="footable-page-arrow">
                        <a data-page={NEXT_ALL}>...</a>
                    </li>
                ) : null;
        }

        return (
            <>
                <div className={className} style={{marginTop: '1em', ...style}}>
                    <ul
                        className="pagination"
                        style={{justifyContent: 'flex-end'}}
                    >
                        <ul
                            className="pagination float-right"
                            onClick={this.onChangePage.bind(this)}
                        >
                            <li className="footable-page-arrow disabled">
                                <a data-page={FIRST}>«</a>
                            </li>
                            <li className="footable-page-arrow disabled">
                                <a data-page={PREV}>‹</a>
                            </li>
                            {isPrevElement}
                            {content}
                            {isNextElement}
                            <li className="footable-page-arrow disabled">
                                <a data-page={NEXT}>›</a>
                            </li>
                            <li className="footable-page-arrow disabled">
                                <a data-page={LAST}>»</a>
                            </li>
                        </ul>
                    </ul>
                </div>
            </>
        );
    }
}

export default Pagination;
