import { Reducer } from "redux";

import React = __React;

declare module "react-bootstrap-table" {

    export interface ToastrProps {
        toastr: any
        options: any
        position: string,
        newestOnTop: boolean,
        timeOut: number,
        confirmOptions: any
    }

    export interface ReduxToastr extends React.Component<any, ToastrProps> { }

    export function reducer() : Reducer;

    export class Toastr {
        error(title: string, msg: string, options?: any): void;
        info(title: string, msg: string, options?: any): void;
        message (title: string, msg: string, options?: any): void;
        success(title: string, msg: string, options?: any): void;
        warning(title: string, msg: string, options?: any): void;
        confirm(mag: string, oprions?: any): void;

        clean(): void;
    }
}
