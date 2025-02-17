import { Box, Button, Typography } from "@mui/material";
import { Component } from "react";
import { Resources } from '@theme/Resources.jsx';

const { logo } = Resources();

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ErrorBoundary caught an error", error, errorInfo);
  }

  goBack() {
    window.history.back();
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError && this.props?.componentToRender) {
      return this.props.componentToRender;
    }

    if (hasError) {
      return (
        <Box textAlign="center" display="flex" justifyContent="center" alignItems="center" flexDirection="column" margin="auto" height="100vh">
          <img src={logo} alt="Logo" width="200" height="auto" />
          <Typography variant="h2" mt={2}>Oops! Algo salió mal 🤔</Typography>

          <Typography variant="body1" m={2}>
            Por favor, <Button variant="text" onClick={_ => this.goBack()}><b>clic acá</b></Button> para recargar la página. Si el problema persiste, contacta a soporte.
          </Typography>


          {error?.message &&
            <Typography variant="body2" mt={8}>
              Detalle del error: {error.message}
            </Typography>}
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
