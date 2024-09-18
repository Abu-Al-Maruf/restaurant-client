import { useEffect, useState } from "react";

const useMenu = () => {
  const [Menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setIsLoading(false);
      });
  }, []);
  return [Menu, isLoading];
};

export default useMenu;
