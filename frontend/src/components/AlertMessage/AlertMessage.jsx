import { Alert, Slide, Snackbar } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";

const AlertMessageContext = createContext();

export const useAlertMessageContext = () => {
    return useContext(AlertMessageContext);
};

export const AlertMessageProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('info');

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [open]);

    const showAlert = (text, messageType = 'info') => {
        if (messageType == "error") {
            (!!text && text !== "") ? setMessage(text) : setMessage("Ha ocurrido un error, intente nuevamente por favor.");
        }
        else {
            setMessage(text);
        }
        setOpen(true);
        setSeverity(messageType);
    };

    const transitionSlide = (props) => {
        return <Slide {...props} direction="right" />;
    }

    return (
        <AlertMessageContext.Provider value={showAlert}>
            {children}
            {
                open &&
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    TransitionComponent={transitionSlide}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                    <Alert onClose={handleClose} severity={severity ? severity : "info"} 
                    sx={{ width: '100%', padding: '0.5em 1em', fontSize: '1.2rem', borderRadius: '50px', alignItems: 'center', whiteSpace: 'pre-wrap'}}>
                        {message}
                    </Alert>
                </Snackbar>
            }
        </AlertMessageContext.Provider>
    );
};
