import { Reducer } from "redux";

import React = __React;

declare namespace ReactReduxToastr {
    export interface ToastrProps {
        toastr: any
        options: any
        position: string,
        newestOnTop: boolean,
        timeOut: number,
        confirmOptions: any
    }

    export class ReduxToastr extends React.Component<any, ToastrProps> {
    }

    export function reducer() : Reducer;
}

export = ReactReduxToastr;
