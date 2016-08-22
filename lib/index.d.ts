import { Reducer } from "redux";

import React = __React;

declare namespace ReactReduxToastr {

    export interface ConfirmOptions {
        confirtmTransitionIn: string,
        confirtmTransitionOut: string,
        confirtmOkText: string,
        confirtmCancelText: string
    }

    export interface ToastrProps {
        toastr: any
        options: any
        position: string,
        newestOnTop: boolean,
        timeOut: number,
        confirmOptions: ConfirmOptions
    }

    export class ReduxToastr extends React.Component<any, ToastrProps> { }

    export function reducer() : Reducer;

    export interface BasicMsgOption {
        icon: any
        timeOut: number,
        onShowComplete: any,
        onHideComplete: any,
        component: any,
        removeOnClick: boolean,
        removeOnHover: boolean,
        /// 'top-right', 'top-left', 'bottom-right', ...
        position: string,
        newestOnTop: boolean,
        timeOut: number
    }

    export class Toastr = {
        function error(title?: string, msg: string, options?: any);
        function info(title?: string, msg: string, options?: any);
        function message (title?: string, msg: string, options?: any);
        function success(title?: string, msg: strring, options?: any);
        function warning(title?: string, msg: string, options?: any);
        function confirm(mag: string, oprions?: any);

        function clean();
    }
}

export = ReactReduxToastr;
