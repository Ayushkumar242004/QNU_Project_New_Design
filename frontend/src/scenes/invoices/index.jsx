import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState, useEffect, useRef } from "react";
import axios from "axios"; // Make sure axios is imported

const MAX_STACK_SIZE_ESTIMATE = 1 * 1024 * 1024;

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const [binaryInput, setBinaryInput] = useState(""); // State to store fetched binary data
  const [binaryInput2, setBinaryInput2] = useState(""); // State to store fetched binary data
  const [binaryInput3, setBinaryInput3] = useState(""); // State to store fetched binary data
  const [binaryInput4, setBinaryInput4] = useState(""); // State to store fetched binary data
  const [binaryInput5, setBinaryInput5] = useState(""); // State to store fetched binary data
  
  
  
  const [isFetching, setIsFetching] = useState(false); // Fetching status
  const [isFetching2, setIsFetching2] = useState(false); // Fetching status
  const [isFetching3, setIsFetching3] = useState(false); // Fetching status
  const [isFetching4, setIsFetching4] = useState(false); // Fetching status
  const [isFetching5, setIsFetching5] = useState(false); // Fetching status
 
 
  const [length,setLength]=useState(8);
  const [length2,setLength2]=useState(8);
  const [length3,setLength3]=useState(8);
  const [length4,setLength4]=useState(8);
  const [length5,setLength5]=useState(8);


  const [resultNIST, setResultNIST] = useState(null);
  const [resultDieharder, setResultDieharder] = useState(null);
  const [resultNIST2, setResultNIST2] = useState(null);
  const [resultDieharder2, setResultDieharder2] = useState(null);
  const [resultNIST3, setResultNIST3] = useState(null);
  const [resultDieharder3, setResultDieharder3] = useState(null);
  const [resultNIST4, setResultNIST4] = useState(null);
  const [resultDieharder4, setResultDieharder4] = useState(null);
  const [resultNIST5, setResultNIST5] = useState(null);
  const [resultDieharder5, setResultDieharder5] = useState(null);

  const intervalRef = useRef(null);
  const intervalRef2 = useRef(null);
  const intervalRef3 = useRef(null);
  const intervalRef4 = useRef(null);
  const intervalRef5 = useRef(null);



  const startFetching = () => {
    if (!isFetching) {
        console.log("clicked");
        setIsFetching(true);
    }
};
  const startFetching2 = () => {
    if (!isFetching2) {
        console.log("clicked");
        setIsFetching2(true);
    }
};
  const startFetching3 = () => {
    if (!isFetching3) {
        console.log("clicked");
        setIsFetching3(true);
    }
};
  const startFetching4 = () => {
    if (!isFetching4) {
        console.log("clicked");
        setIsFetching4(true);
    }
};
  const startFetching5 = () => {
    if (!isFetching5) {
        console.log("clicked");
        setIsFetching5(true);
    }
};

useEffect(() => {
  if (isFetching) {
    console.log("hi");
      fetchRandomNumber(); // Fetch immediately
      intervalRef.current = setInterval(fetchRandomNumber, 3000);
  } else {
      clearInterval(intervalRef.current);
  }

  return () => clearInterval(intervalRef.current);
}, [isFetching]);

useEffect(() => {
  if (isFetching2) {
    console.log("hi");
      fetchRandomNumber2(); // Fetch immediately
      intervalRef2.current = setInterval(fetchRandomNumber2, 3000);
  } else {
      clearInterval(intervalRef2.current);
  }

  return () => clearInterval(intervalRef2.current);
}, [isFetching2]);

useEffect(() => {
  if (isFetching3) {
    console.log("hi");
      fetchRandomNumber3(); // Fetch immediately
      intervalRef3.current = setInterval(fetchRandomNumber3, 3000);
  } else {
      clearInterval(intervalRef3.current);
  }

  return () => clearInterval(intervalRef3.current);
}, [isFetching3]);

useEffect(() => {
  if (isFetching4) {
    console.log("hi");
      fetchRandomNumber4(); // Fetch immediately
      intervalRef4.current = setInterval(fetchRandomNumber4, 3000);
  } else {
      clearInterval(intervalRef4.current);
  }

  return () => clearInterval(intervalRef4.current);
}, [isFetching4]);

useEffect(() => {
  if (isFetching5) {
    console.log("hi");
      fetchRandomNumber5(); // Fetch immediately
      intervalRef5.current = setInterval(fetchRandomNumber5, 3000);
  } else {
      clearInterval(intervalRef5.current);
  }

  return () => clearInterval(intervalRef5.current);
}, [isFetching5]);

  // Stop fetching binary data
  const stopFetching = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsFetching(false);
  };

  const stopFetching2 = () => {
    if (intervalRef2.current) {
      clearInterval(intervalRef2.current);
      intervalRef2.current = null;
    }
    setIsFetching2(false);
  };
  const stopFetching3 = () => {
    if (intervalRef3.current) {
      clearInterval(intervalRef3.current);
      intervalRef3.current = null;
    }
    setIsFetching3(false);
  };
  const stopFetching4 = () => {
    if (intervalRef4.current) {
      clearInterval(intervalRef4.current);
      intervalRef4.current = null;
    }
    setIsFetching4(false);
  };
  const stopFetching5 = () => {
    if (intervalRef5.current) {
      clearInterval(intervalRef5.current);
      intervalRef5.current = null;
    }
    setIsFetching5(false);
  };

  
  useEffect(() => {
    return () => stopFetching();
  }, []);
  useEffect(() => {
    return () => stopFetching2();
  }, []);
  useEffect(() => {
    return () => stopFetching3();
  }, []);
  useEffect(() => {
    return () => stopFetching4();
  }, []);
  useEffect(() => {
    return () => stopFetching5();
  }, []);

  const fetchRandomNumber = async () => {
    if (!isFetching) return;
    console.log("function called");
    try {
      const response = await axios.get("http://localhost:3000/random-binary", {
        params: { length: length }, // Use the length state here
      });

      if (response.data?.binary) {
        setBinaryInput(response.data.binary);
      } else {
        console.error("Invalid response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching random binary number:", error);
    }
  };

  const fetchRandomNumber2 = async () => {
    if (!isFetching2) return;
    console.log("function called");
    try {
      const response = await axios.get("http://localhost:3000/random-binary", {
        params: { length: length2 }, // Use the length state here
      });

      if (response.data?.binary) {
        setBinaryInput2(response.data.binary);
      } else {
        console.error("Invalid response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching random binary number:", error);
    }
  };

  const fetchRandomNumber3 = async () => {
    if (!isFetching3) return;
    console.log("function called");
    try {
      const response = await axios.get("http://localhost:3000/random-binary", {
        params: { length: length3 }, // Use the length state here
      });

      if (response.data?.binary) {
        setBinaryInput3(response.data.binary);
      } else {
        console.error("Invalid response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching random binary number:", error);
    }
  };

  const fetchRandomNumber4 = async () => {
    if (!isFetching4) return;
    console.log("function called");
    try {
      const response = await axios.get("http://localhost:3000/random-binary", {
        params: { length: length4 }, // Use the length state here
      });

      if (response.data?.binary) {
        setBinaryInput4(response.data.binary);
      } else {
        console.error("Invalid response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching random binary number:", error);
    }
  };

  const fetchRandomNumber5 = async () => {
    if (!isFetching5) return;
    console.log("function called");
    try {
      const response = await axios.get("http://localhost:3000/random-binary", {
        params: { length: length5 }, // Use the length state here
      });

      if (response.data?.binary) {
        setBinaryInput5(response.data.binary);
      } else {
        console.error("Invalid response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching random binary number:", error);
    }
  };


  const saveBinaryNumber = async () => {
    // Use the binaryInput state which holds the fetched binary data
    const binaryNumber = binaryInput;

    if (!binaryNumber) {

      return;
    }

    try {
      // Fetch the username from the API

      const token = localStorage.getItem("accessToken");

      if (!token) {

        return;
      }



      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };


      const response = await axios.get("http://127.0.0.1:8000/api/user/", config);


      const username = response.data.username;

      // Format the current date and time
      const now = new Date();
      const formattedDate = `${now.getFullYear()}_${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}_${now
          .getDate()
          .toString()
          .padStart(2, "0")}`;
      const formattedTime = `${now.getHours().toString().padStart(2, "0")}_${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}_${now.getSeconds().toString().padStart(2, "0")}`;


      // Combine to form the filename
      const fileName = `${username}_${formattedDate}_${formattedTime}.txt`;

      // Create a Blob with the binary number
      const blob = new Blob([binaryNumber], { type: "text/plain" });

      // Create a link element to trigger the file download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName; // Filename for the downloaded file

      // Programmatically click the link to trigger the download
      link.click();

      // Clean up the URL object after the download is triggered
      URL.revokeObjectURL(link.href);

    } catch (error) {
      console.error("Error occurred:", error);
      alert("Failed to fetch username or save file.");
    }
  };

  const saveBinaryNumber2 = async () => {
    // Use the binaryInput state which holds the fetched binary data
    const binaryNumber = binaryInput2;

    if (!binaryNumber) {

      return;
    }

    try {
      // Fetch the username from the API

      const token = localStorage.getItem("accessToken");

      if (!token) {

        return;
      }



      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };


      const response = await axios.get("http://127.0.0.1:8000/api/user/", config);


      const username = response.data.username;

      // Format the current date and time
      const now = new Date();
      const formattedDate = `${now.getFullYear()}_${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}_${now
          .getDate()
          .toString()
          .padStart(2, "0")}`;
      const formattedTime = `${now.getHours().toString().padStart(2, "0")}_${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}_${now.getSeconds().toString().padStart(2, "0")}`;


      // Combine to form the filename
      const fileName = `${username}_${formattedDate}_${formattedTime}.txt`;

      // Create a Blob with the binary number
      const blob = new Blob([binaryNumber], { type: "text/plain" });

      // Create a link element to trigger the file download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName; // Filename for the downloaded file

      // Programmatically click the link to trigger the download
      link.click();

      // Clean up the URL object after the download is triggered
      URL.revokeObjectURL(link.href);

    } catch (error) {
      console.error("Error occurred:", error);
      alert("Failed to fetch username or save file.");
    }
  };

  const saveBinaryNumber3 = async () => {
    // Use the binaryInput state which holds the fetched binary data
    const binaryNumber = binaryInput3;

    if (!binaryNumber) {

      return;
    }

    try {
      // Fetch the username from the API

      const token = localStorage.getItem("accessToken");

      if (!token) {

        return;
      }



      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };


      const response = await axios.get("http://127.0.0.1:8000/api/user/", config);


      const username = response.data.username;

      // Format the current date and time
      const now = new Date();
      const formattedDate = `${now.getFullYear()}_${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}_${now
          .getDate()
          .toString()
          .padStart(2, "0")}`;
      const formattedTime = `${now.getHours().toString().padStart(2, "0")}_${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}_${now.getSeconds().toString().padStart(2, "0")}`;


      // Combine to form the filename
      const fileName = `${username}_${formattedDate}_${formattedTime}.txt`;

      // Create a Blob with the binary number
      const blob = new Blob([binaryNumber], { type: "text/plain" });

      // Create a link element to trigger the file download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName; // Filename for the downloaded file

      // Programmatically click the link to trigger the download
      link.click();

      // Clean up the URL object after the download is triggered
      URL.revokeObjectURL(link.href);

    } catch (error) {
      console.error("Error occurred:", error);
      alert("Failed to fetch username or save file.");
    }
  };

  const saveBinaryNumber4 = async () => {
    // Use the binaryInput state which holds the fetched binary data
    const binaryNumber = binaryInput4;

    if (!binaryNumber) {

      return;
    }

    try {
      // Fetch the username from the API

      const token = localStorage.getItem("accessToken");

      if (!token) {

        return;
      }



      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };


      const response = await axios.get("http://127.0.0.1:8000/api/user/", config);


      const username = response.data.username;

      // Format the current date and time
      const now = new Date();
      const formattedDate = `${now.getFullYear()}_${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}_${now
          .getDate()
          .toString()
          .padStart(2, "0")}`;
      const formattedTime = `${now.getHours().toString().padStart(2, "0")}_${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}_${now.getSeconds().toString().padStart(2, "0")}`;


      // Combine to form the filename
      const fileName = `${username}_${formattedDate}_${formattedTime}.txt`;

      // Create a Blob with the binary number
      const blob = new Blob([binaryNumber], { type: "text/plain" });

      // Create a link element to trigger the file download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName; // Filename for the downloaded file

      // Programmatically click the link to trigger the download
      link.click();

      // Clean up the URL object after the download is triggered
      URL.revokeObjectURL(link.href);

    } catch (error) {
      console.error("Error occurred:", error);
      alert("Failed to fetch username or save file.");
    }
  };

  const saveBinaryNumber5 = async () => {
    // Use the binaryInput state which holds the fetched binary data
    const binaryNumber = binaryInput;

    if (!binaryNumber) {

      return;
    }

    try {
      // Fetch the username from the API

      const token = localStorage.getItem("accessToken");

      if (!token) {

        return;
      }



      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };


      const response = await axios.get("http://127.0.0.1:8000/api/user/", config);


      const username = response.data.username;

      // Format the current date and time
      const now = new Date();
      const formattedDate = `${now.getFullYear()}_${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}_${now
          .getDate()
          .toString()
          .padStart(2, "0")}`;
      const formattedTime = `${now.getHours().toString().padStart(2, "0")}_${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}_${now.getSeconds().toString().padStart(2, "0")}`;


      // Combine to form the filename
      const fileName = `${username}_${formattedDate}_${formattedTime}.txt`;

      // Create a Blob with the binary number
      const blob = new Blob([binaryNumber], { type: "text/plain" });

      // Create a link element to trigger the file download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName; // Filename for the downloaded file

      // Programmatically click the link to trigger the download
      link.click();

      // Clean up the URL object after the download is triggered
      URL.revokeObjectURL(link.href);

    } catch (error) {
      console.error("Error occurred:", error);
      alert("Failed to fetch username or save file.");
    }
  };


  

  useEffect(() => {
    if (!binaryInput) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput });
        setResultNIST(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput]);
  useEffect(() => {
    if (!binaryInput) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput });
        setResultDieharder(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput]);





  useEffect(() => {
    if (!binaryInput2) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput2 });
        setResultNIST2(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput2]);
  useEffect(() => {
    if (!binaryInput2) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput2 });
        setResultDieharder2(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput2]);



  useEffect(() => {
    if (!binaryInput3) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput3 });
        setResultNIST3(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput3]);
  useEffect(() => {
    if (!binaryInput3) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput3 });
        setResultDieharder3(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput3]);



  useEffect(() => {
    if (!binaryInput4) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput4 });
        setResultNIST4(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput4]);
  useEffect(() => {
    if (!binaryInput4) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput4 });
        setResultDieharder4(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput4]);



  useEffect(() => {
    if (!binaryInput5) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput5 });
        setResultNIST5(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput5]);
  useEffect(() => {
    if (!binaryInput5) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput5 });
        setResultDieharder5(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput5]);


  const handleButtonClick = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-server/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick2 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-server/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput2 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput2 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick3 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-server/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput3 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput3 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick4 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-server/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput4 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput4 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick5 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-server/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput5 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput5 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  return (
    <Box m="20px">
      <Header title="Server Connections" />
      {/* Table Section */}
      <Box mt="40px" p="20px" sx={{ backgroundColor: colors.primary[400], borderRadius: "8px" }}>
        <Box
          component="table"
          sx={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
            "& th": {
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              padding: "12px",
            },
            "& td": {
              padding: "12px",
              border: `1px solid ${colors.blueAccent[500]}`,
            },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "5%" }}>Serial No</th>
              <th style={{ width: "40%" }}>Test</th>
             
              <th style={{ width: "10%" }}>Enter Length</th>
              <th style={{ width: "15%" }}>NIST Results</th>
              <th style={{ width: "15%" }}>Dieharder Tests Result</th>
              <th>IP Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>

                <Box
                  mt="20px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="10px"
                >
                  <button
                    onClick={startFetching}
                    style={{
                      backgroundColor: colors.greenAccent[400],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Start Fetching
                  </button>
                  <button
                    onClick={stopFetching}
                    disabled={!isFetching}
                    style={{
                      backgroundColor: isFetching
                        ? colors.redAccent[400]
                        : colors.primary[300],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: isFetching ? "pointer" : "not-allowed",
                    }}
                  >
                    Stop Fetching
                  </button>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick("report")}
                    sx={{
                      backgroundColor: colors.redAccent[400],
                      color: colors.grey[100],
                      textTransform: "none",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      "&:hover": { backgroundColor: colors.redAccent[500] },
                    }}
                  >
                    Generate Report
                  </Button>
                  {/* New Button for Saving Binary Number */}
                  <button
                    onClick={saveBinaryNumber} // Add your saveBinaryNumber function here
                    style={{
                      backgroundColor: colors.blueAccent[400],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Save Binary Number
                  </button>
                </Box>

              </td>
              
              <td>
                {/* TextField to accept user input for length */}
                <TextField
                  label="Enter Length"
                  type="number"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  variant="outlined"
                  size="small"
                  sx={{ width: "100px" }}
                />
              </td>
              <td>{resultNIST}</td>
              {/* <td>{binaryInput}</td> */}
              <td>{resultDieharder}</td>
              <td>160.20.123.9</td>
            </tr>



            <tr>
              <td>2</td>
              <td>

                <Box
                  mt="20px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="10px"
                >
                  <button
                    onClick={startFetching2}
                    style={{
                      backgroundColor: colors.greenAccent[400],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Start Fetching
                  </button>
                  <button
                    onClick={stopFetching2}
                    disabled={!isFetching2}
                    style={{
                      backgroundColor: isFetching2
                        ? colors.redAccent[400]
                        : colors.primary[300],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: isFetching2 ? "pointer" : "not-allowed",
                    }}
                  >
                    Stop Fetching
                  </button>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick2("report")}
                    sx={{
                      backgroundColor: colors.redAccent[400],
                      color: colors.grey[100],
                      textTransform: "none",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      "&:hover": { backgroundColor: colors.redAccent[500] },
                    }}
                  >
                    Generate Report
                  </Button>
                  {/* New Button for Saving Binary Number */}
                  <button
                    onClick={saveBinaryNumber2} // Add your saveBinaryNumber function here
                    style={{
                      backgroundColor: colors.blueAccent[400],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Save Binary Number
                  </button>
                </Box>

              </td>
              
              <td>
                {/* TextField to accept user input for length */}
                <TextField
                  label="Enter Length"
                  type="number"
                  value={length2}
                  onChange={(e) => setLength2(Number(e.target.value))}
                  variant="outlined"
                  size="small"
                  sx={{ width: "100px" }}
                />
              </td>
              <td>{resultNIST2}</td>
              {/* <td>{binaryInput2}</td> */}
              <td>{resultDieharder2}</td>
              <td>160.20.123.9</td>
            </tr>

            <tr>
              <td>3</td>
              <td>

                <Box
                  mt="20px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="10px"
                >
                  <button
                    onClick={startFetching3}
                    style={{
                      backgroundColor: colors.greenAccent[400],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Start Fetching
                  </button>
                  <button
                    onClick={stopFetching3}
                    disabled={!isFetching3}
                    style={{
                      backgroundColor: isFetching3
                        ? colors.redAccent[400]
                        : colors.primary[300],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: isFetching3 ? "pointer" : "not-allowed",
                    }}
                  >
                    Stop Fetching
                  </button>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick3("report")}
                    sx={{
                      backgroundColor: colors.redAccent[400],
                      color: colors.grey[100],
                      textTransform: "none",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      "&:hover": { backgroundColor: colors.redAccent[500] },
                    }}
                  >
                    Generate Report
                  </Button>
                  {/* New Button for Saving Binary Number */}
                  <button
                    onClick={saveBinaryNumber3} // Add your saveBinaryNumber function here
                    style={{
                      backgroundColor: colors.blueAccent[400],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Save Binary Number
                  </button>
                </Box>

              </td>
              
              <td>
                {/* TextField to accept user input for length */}
                <TextField
                  label="Enter Length"
                  type="number"
                  value={length3}
                  onChange={(e) => setLength3(Number(e.target.value))}
                  variant="outlined"
                  size="small"
                  sx={{ width: "100px" }}
                />
              </td>
              <td>{resultNIST3}</td>
              <td>{resultDieharder3}</td>
              <td>160.20.123.9</td>
            </tr>

            <tr>
              <td>4</td>
              <td>

                <Box
                  mt="20px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="10px"
                >
                  <button
                    onClick={startFetching4}
                    style={{
                      backgroundColor: colors.greenAccent[400],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Start Fetching
                  </button>
                  <button
                    onClick={stopFetching4}
                    disabled={!isFetching4}
                    style={{
                      backgroundColor: isFetching4
                        ? colors.redAccent[400]
                        : colors.primary[300],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: isFetching4 ? "pointer" : "not-allowed",
                    }}
                  >
                    Stop Fetching
                  </button>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick4("report")}
                    sx={{
                      backgroundColor: colors.redAccent[400],
                      color: colors.grey[100],
                      textTransform: "none",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      "&:hover": { backgroundColor: colors.redAccent[500] },
                    }}
                  >
                    Generate Report
                  </Button>
                  {/* New Button for Saving Binary Number */}
                  <button
                    onClick={saveBinaryNumber4} // Add your saveBinaryNumber function here
                    style={{
                      backgroundColor: colors.blueAccent[400],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Save Binary Number
                  </button>
                </Box>

              </td>
              
              <td>
                {/* TextField to accept user input for length */}
                <TextField
                  label="Enter Length"
                  type="number"
                  value={length4}
                  onChange={(e) => setLength4(Number(e.target.value))}
                  variant="outlined"
                  size="small"
                  sx={{ width: "100px" }}
                />
              </td>
              <td>{resultNIST4}</td>
              <td>{resultDieharder4}</td>
              <td>160.20.123.9</td>
            </tr>

            <tr>
              <td>5</td>
              <td>

                <Box
                  mt="20px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="10px"
                >
                  <button
                    onClick={startFetching5}
                    style={{
                      backgroundColor: colors.greenAccent[400],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Start Fetching
                  </button>
                  <button
                    onClick={stopFetching5}
                    disabled={!isFetching5}
                    style={{
                      backgroundColor: isFetching5
                        ? colors.redAccent[400]
                        : colors.primary[300],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: isFetching5 ? "pointer" : "not-allowed",
                    }}
                  >
                    Stop Fetching
                  </button>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick5("report")}
                    sx={{
                      backgroundColor: colors.redAccent[400],
                      color: colors.grey[100],
                      textTransform: "none",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      "&:hover": { backgroundColor: colors.redAccent[500] },
                    }}
                  >
                    Generate Report
                  </Button>
                  {/* New Button for Saving Binary Number */}
                  <button
                    onClick={saveBinaryNumber5} // Add your saveBinaryNumber function here
                    style={{
                      backgroundColor: colors.blueAccent[400],
                      color: colors.primary[100],
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Save Binary Number
                  </button>
                </Box>

              </td>
              
              <td>
                {/* TextField to accept user input for length */}
                <TextField
                  label="Enter Length"
                  type="number"
                  value={length5}
                  onChange={(e) => setLength5(Number(e.target.value))}
                  variant="outlined"
                  size="small"
                  sx={{ width: "100px" }}
                />
              </td>
              <td>{resultNIST5}</td>
              <td>{resultDieharder5}</td>
              <td>160.20.123.9</td>
            </tr>


          </tbody>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
