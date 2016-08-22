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

    export class ReduxToastr extends React.Component<any, ToastrProps> { }

    export function reducer() : Reducer;

    export class Toastr {
        function error(title: string, msg: string, options?: any);
        function info(title: string, msg: string, options?: any);
        function message (title: string, msg: string, options?: any);
        function success(title: string, msg: string, options?: any);
        function warning(title: string, msg: string, options?: any);
        function confirm(mag: string, oprions?: any);

        function clean();
    }
}

export = ReactReduxToastr;
