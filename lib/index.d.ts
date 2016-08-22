declare namespace react-redux-toastr {
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

export = react-redux-toastr;
