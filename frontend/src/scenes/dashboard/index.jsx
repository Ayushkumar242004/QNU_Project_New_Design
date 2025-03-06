import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import { Circle } from '@mui/icons-material';
import Header from "../../components/Header";

import StatBox from "../../components/StatBox";
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { useState, useEffect, useRef } from "react";
import axios from "axios"; // Make sure axios is imported

// const BinaryGraphDisplay = ({ binaryInput }) => {
//   const [graphUrl, setGraphUrl] = useState(null);
//   const [error, setError] = useState("");
//   const [reportUrl, setReportUrl] = useState("");

//   useEffect(() => {
//     if (!binaryInput) return;

//     const fetchGraph = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/graph-generation/", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ binary_data: binaryInput }),
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch the graph");
//         }

//         const blob = await response.blob();
//         const graphImageUrl = URL.createObjectURL(blob);
//         console.log('graph', graphImageUrl)
//         setGraphUrl(graphImageUrl);
//         setReportUrl(graphImageUrl);
//         setError("");
//       } catch (err) {
//         setError(err.message);
//         setGraphUrl(null);
//       }
//     };

//     fetchGraph();
//   }, [binaryInput]);

//   return (
//     <Box>
//       {error && <Typography color="error">{error}</Typography>}
//       {graphUrl && <img src={graphUrl} alt="Generated Graph" style={{ width: '845px', height: '450px' }} />} {/* Adjust width and height here */}
//     </Box>
//   );
// };

const isLargeScreen = window.innerWidth > 768;
const BinaryGraphDisplay = ({ binaryInput }) => {
  const [graphUrl, setGraphUrl] = useState(null);
  const [error, setError] = useState("");
  const [reportUrl, setReportUrl] = useState("");

  useEffect(() => {
    if (!binaryInput) return;

    const fetchGraph = async () => {
      try {
        const response = await fetch("http://localhost:8000/graph-generation/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ binary_data: binaryInput }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch the graph");
        }

        const blob = await response.blob();
        const graphImageUrl = URL.createObjectURL(blob);
        setGraphUrl(graphImageUrl);
        setReportUrl(graphImageUrl);
        setError("");
      } catch (err) {
        setError(err.message);
        setGraphUrl(null);
      }
    };

    fetchGraph();
  }, [binaryInput]);

  const downloadGraph = () => {
    if (!graphUrl) {
      console.error('Graph URL is not ready yet');
      return;
    }

    // Create an anchor element for downloading the graph
    const link = document.createElement('a');
    link.href = graphUrl; // The URL of the graph image
    link.download = 'graph.png'; // File name for download
    link.click(); // Trigger the download
  };

  return (
    <Box>
      {error && <Typography color="error">{error}</Typography>}
      {graphUrl && (
        <>
          <img src={graphUrl} alt="Generated Graph" style={{ width: '845px', height: '450px' }} />
          <button
            onClick={downloadGraph}
            style={{
              backgroundColor: 'red',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '10px 20px',
              cursor: 'pointer',
              marginTop: '10px',

            }}
          >
            Download Graph
          </button>
        </>
      )}
    </Box>
  );
};


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isLive, setIsLive] = useState(false);
  const [binaryInput, setBinaryInput] = useState(""); // State to store fetched binary data
  const [url, setUrl] = useState("http://localhost:3001/random-binary"); // Default URL
  const [isFetching, setIsFetching] = useState(false); // Fetching status
  const [intervalId, setIntervalId] = useState(null); // Interval ID
  const [reportUrl, setReportUrl] = useState(null);
  // Handle API URL input
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  // Start fetching binary data
  const startFetching = () => {
    if (url.trim() === "") {
      alert("Please enter a valid URL");
      return;
    }
    setIsLive(true);
    setIsFetching(true);
  };

  // Stop fetching binary data
  const stopFetching = () => {
    if (isFetching && intervalId) {
      clearInterval(intervalId); // Clear the interval
      setIsLive(false);
      setIsFetching(false);
    }
  };

  // // Fetch binary data from the proxy server
  // const fetchRandomNumber = async () => {
  //   try {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         API_Key: "6625a404-fcf7-aa22-595f-1ce908fc5ebb",
  //         APISalt: "$2a$04$nArWqsGVKLmYJ3ob48c2/.fL8hULjZTJLWdtTEstM4Ss8oqagInmu",
  //         Rand_type: 1, // Request binary data
  //         Length: 64, // Example length
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     if (data && data.random) {
  //       setBinaryInput(data.random); // Update binaryInput state
  //     } else {
  //       throw new Error("Invalid API response format");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching binary number:", error);
  //     setBinaryInput("Error fetching data");
  //   }
  // };


  const fetchRandomNumber = async () => {
    if (!isFetching) return; // Prevent multiple simultaneous requests


    try {
      const response = await axios.get("http://localhost:3000/random-binary", {
        params: { length: 8 }, // Use the length state here
      });

      if (response.data?.binary) {
        setBinaryInput(response.data.binary); // Update binaryInput state
      } else {
        console.error("Invalid response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching random binary number:", error);
      setBinaryInput("Error fetching data"); // Optionally handle the error state
    }
  };

  // Fetch data every 10 seconds when isFetching is active
  useEffect(() => {
    if (isFetching && url) {
      const id = setInterval(fetchRandomNumber, 3000);
      setIntervalId(id);
    }
    return () => clearInterval(intervalId);
  }, [isFetching, url]);

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
    }
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to our dashboard" />
        <Box
          mt="20px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="10px"
        >
          <Typography
            variant="body1"
            color={colors.grey[100]}
            sx={{ fontSize: "18px" }} // Adjust the size here
          >
            Binary Number: {binaryInput || ""}
          </Typography>
          <button
            onClick={startFetching}
            style={{
              backgroundColor: colors.blueAccent[700],
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
                ? colors.grey[600] // Dark Gray for active button
                : colors.grey[400], // Muted Gray for disabled state
              color: colors.primary[100],
              border: "none",
              borderRadius: 8,
              padding: "10px 20px",
              cursor: isFetching ? "pointer" : "not-allowed",
            }}
          >
            Stop Fetching
          </button>



          {isLive && (
            <button
              style={{
                backgroundColor: '#4caf50', // Green color for live button
                color: '#ffffff',
                border: "none",
                borderRadius: 8,
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: "default",
              }}
            >
              <Circle style={{ color: 'green', fontSize: '20px' }} />
              Live
            </button>
          )}
        </Box>

        <Box>
          <Button
            variant="contained"
            onClick={() => handleButtonClick("report")}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Download Report
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="25°C"
            subtitle="System Temperature"
            progress="0.75"
            increase="+14%"
            icon={
              <DeviceThermostatOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />

        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={binaryInput || "No binary number"}
            subtitle="Binary Number"
            progress="0.50"
            increase="+21%"
            icon={
              <NumbersOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />

        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Non-Random number"
            subtitle="Result"
            progress="0.30"
            increase="+5%"
            icon={
              <AccessTimeOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />

        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2s"
            subtitle="Average Computation Time"
            progress="0.80"
            increase="+43%"
            icon={
              <AccessTimeOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box gridColumn="span 8" gridRow="span 4" backgroundColor={colors.primary[400]}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Generated Graph
              </Typography>
            </Box>
            {/* <Box>
              <IconButton
                onClick={() => {
                  if (reportUrl) {
                    console.log('hi report',reportUrl);
                    const link = document.createElement("a");
                    link.href = reportUrl;
                    link.download = "generated_graph.png"; // Desired filename
                    link.click(); // Simulate the click to trigger the download
                  }
                }}
                disabled={!reportUrl}
              >
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>

            </Box> */}
            {/* <button
              // onClick={downloadGraph}
              style={{
                backgroundColor: 'red', // Set the background color to red
                color: colors.primary[100],
                border: 'none',
                borderRadius: 8,
                padding: '10px 20px',
                cursor: 'pointer',
              }}
            >
              Download
            </button> */}

          </Box>


          <div
  style={{
    width: "100%", 
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  }}
>
  <div
    style={{
      width: "100%",
      height: "100%",
      transform: "scale(0.9)", // Adjust scale dynamically if needed
      transformOrigin: "center",
    }}
  >
    <BinaryGraphDisplay binaryInput={binaryInput} />
  </div>
</div>


        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Data History
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>

              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>

            </Box>
          ))}
        </Box>



      </Box>
    </Box>
  );
};

export default Dashboard;
