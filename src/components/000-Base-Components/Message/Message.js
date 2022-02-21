import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * ": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.error && <Alert severity="error">{props.message}</Alert>}
      {props.warning && <Alert severity="warning">{props.message}</Alert>}
      {props.info && <Alert severity="info">{props.message}</Alert>}
      {props.success && <Alert severity="success">{props.message}</Alert>}
    </div>
  );
}
