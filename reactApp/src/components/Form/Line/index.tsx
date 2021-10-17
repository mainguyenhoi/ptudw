import React from "react";

const  LineComponent = () => {
        return <div className="hr-line-dashed" />
}

export const Line = React.memo(LineComponent);

