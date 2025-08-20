import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const WithAuth = (WrapperComponent: any) => {
  return (props: any) => {
    const navigate = useNavigate();
    const isAuthernticated = false;
    useEffect(() => {
      console.log("isAuthernticated", isAuthernticated);

      if (!isAuthernticated) {
        navigate("/");
      }
    }, [isAuthernticated, navigate]);

    return isAuthernticated ? (
      <WrapperComponent {...props} />
    ) : (
      <div>null </div>
    );
  };
};

export default WithAuth;
