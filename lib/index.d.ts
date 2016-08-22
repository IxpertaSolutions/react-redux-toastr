import { Reducer } from "redux";
import "react-redux-toastr"

declare namespace Toastr {
    import React = __React;

    export interface ToastrProps {
        toastr: any
        options: any
        position: string,
        newestOnTop: boolean,
        timeOut: number,
        confirmOptions: any
    }

    export class ReduxToastr extends React.Component<ToastrProps, any> {
    }

    export function reducer() : Reducer;
}

declare module "react-redux-toastr" {
    export = Toastr;
}
