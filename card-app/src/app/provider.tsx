'use client'

import { Global } from "@emotion/react";
import globalStyles from "./styles/globalStyles";

const Provider = () => {
    return (
        <Global styles={globalStyles} />
    )
}

export default Provider;