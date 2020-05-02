// NPM Modules
import React from "react";
import { useTranslation } from "react-i18next";
// Material UI
// Own components
import Authentication from "../../../components/forms/Authentication";
// Models
// Own modules
// Assets
// CSS


// Reset password section
export default function Reset(props) {
    
    // Translate
    const { t } = useTranslation();

    // Reset de contraseña
    const resetPassword = async (inputs) => {
        const { password, password_2 } = {...inputs};
        if ( password !== password_2 ) {
            return props.enqueueSnackbar(t("Error. Both passwords should match"), { variant: "error", });
        } 
        props.resetAccount(props.match.params.token, password)
        .then (user => props.enqueueSnackbar(t("Password reset successfully"), { variant: "success", }))
        .catch (error => props.enqueueSnackbar(error, { variant: "error", }));
    }
    
    /**
    * Render
    */
    return (
        <Authentication 
            form="reset"
            isLoading={props.isAuthenticating} 
            onSubmit={resetPassword} 
        />
    );
}
