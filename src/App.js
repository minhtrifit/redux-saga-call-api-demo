import "./App.css";
import { useDispatch } from "react-redux";
import { getUsersFetch } from "./redux/reducers/UserReducer";
import { Button, Typography, Box } from "@mui/material";
import UserTable from "./components/UserTable";

function App() {
  const dispatch = useDispatch();
  const handleCallAPI = () => {
    dispatch(getUsersFetch());
  };

  return (
    <div className="app">
      <Typography fontSize={30} fontWeight={700} mb={2}>
        USER LIST
      </Typography>
      <Button
        variant="contained"
        onClick={(e) => {
          handleCallAPI();
        }}
      >
        Get user
      </Button>
      <Box mt={3} width="80%">
        <UserTable />
      </Box>
    </div>
  );
}

export default App;
