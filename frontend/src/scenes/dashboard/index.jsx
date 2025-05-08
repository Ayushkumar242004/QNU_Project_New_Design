import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Select,
} from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import { Circle } from "@mui/icons-material";
import Header from "../../components/Header";

import StatBox from "../../components/StatBox";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useState, useEffect, useRef } from "react";
import axios from "axios"; // Make sure axios is imported
import CircularProgress from "@mui/material/CircularProgress";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { TextField, MenuItem, FormControl } from "@mui/material";
import dayjs from "dayjs";

const isLargeScreen = window.innerWidth > 768;
const BinaryGraphDisplay = ({ binaryInput }) => {
  const [graphUrl, setGraphUrl] = useState(null);
  const [error, setError] = useState("");
  const [reportUrl, setReportUrl] = useState("");

  useEffect(() => {
    if (!binaryInput || binaryInput === "Error fetching data") return;

    const fetchGraph = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/graph-generation/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ binary_data: binaryInput }),
          }
        );

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
      console.error("Graph URL is not ready yet");
      return;
    }

    // Create an anchor element for downloading the graph
    const link = document.createElement("a");
    link.href = graphUrl; // The URL of the graph image
    link.download = "graph.png"; // File name for download
    link.click(); // Trigger the download
  };

  return (
    <Box>
      {error && <Typography color="error">{error}</Typography>}
      {graphUrl && (
        <>
          <img
            src={graphUrl}
            alt="Generated Graph"
            style={{ width: "845px", height: "450px" }}
          />
         
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
  const [binaryInput2, setBinaryInput2] = useState(""); // State to store fetched binary data
  const [url, setUrl] = useState("http://localhost:3001/random-binary"); // Default URL
  const [isFetching, setIsFetching] = useState(false); // Fetching status
  const [intervalId, setIntervalId] = useState(null); // Interval ID
  const [reportUrl, setReportUrl] = useState(null);
  // Handle API URL input
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const [length, setLength] = useState(8);
  const MAX_STACK_SIZE_ESTIMATE = 1 * 1024 * 1024;

  const [resultNIST, setResultNIST] = useState(null);
  const [resultNIST2, setResultNIST2] = useState(null);
  const [resultNIST90B, setResultNIST90B] = useState(null);
  const [resultNIST90B2, setResultNIST90B2] = useState(null);
  const [resultDieharder, setResultDieharder] = useState(null);
  const [resultDieharder2, setResultDieharder2] = useState(null);

  const [scheduledTime2, setScheduledTime2] = useState("");
  const [selectedServer, setSelectedServer] = useState("Server 1");
  
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingProgress2, setLoadingProgress2] = useState(0);
  
  const fileInputRef = useRef(null);
  const [uploadTime, setUploadTime] = useState("");
  const [fileName, setFileName] = useState("");
  
  const [scheduledTime, setScheduledTime] = useState("2025-04-10 11:31:08");
  const [debouncedScheduledTime, setDebouncedScheduledTime] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    if (dayjs(inputDate, "YYYY-MM-DD", true).isValid()) {
      setDate(inputDate);
    } else {
      alert("Invalid date format. Use YYYY-MM-DD.");
    }
  };

  const handleTimeChange = (event) => {
    const inputTime = event.target.value;
    setTime(inputTime); // Update the time state immediately
  };


  useEffect(() => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/; // 24-hour format validation

    const handler = setTimeout(() => {
      if (time && !timeRegex.test(time)) {
        alert("Invalid time format. Use HH:mm:ss (24-hour format).");
      }
    }, 2000); // Wait 500ms after the user stops typing

    return () => {
      clearTimeout(handler); // Clear the timeout if the user types again
    };
  }, [time]);

  useEffect(() => {
    if (date && time) {
      setScheduledTime2(`${date} ${time}`);
    }
  }, [date, time]);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

    if (selectedFile.size > MAX_STACK_SIZE_ESTIMATE) {
      alert("Warning: The selected file is too large. Please choose a smaller file.");
      return;
    }

    setFileName(selectedFile.name);


    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput2(textData);

      // Store the current time when the file is uploaded
      const currentTime = new Date().toLocaleTimeString();
      setUploadTime(currentTime); // Update the state with the current time

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
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

  const intervalRef = useRef(null);


  const fetchRandomNumber = async () => {
    if (!isFetching) return; // Prevent multiple simultaneous requests

    try {
      const response = await axios.get("http://localhost:3001/random-binary", {
        params: { length: length }, // Use the length state here
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

  useEffect(() => {
    if (!binaryInput || binaryInput === "Error fetching data") return;  // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress(0); // Start loading from 0%

      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); // Increment progress every 500ms until 90%
        console.log("sent");
        const response = await axios.post(
          "http://localhost:8000/generate_final_ans/",
          {
            binary_data: binaryInput,
            scheduled_time: scheduledTime,
          }
        );

        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress(100); // Set progress to 100% after response is received
        setResultNIST(response.data); // Set the result data
      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress(0); // Reset progress in case of failure
      }
    };

    fetchResult();
  }, [binaryInput]);

  useEffect(() => {
    if (!binaryInput || binaryInput === "Error fetching data") return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      // setLoadingProgress(0); // Start loading from 0%

      try {
        // let progressInterval = setInterval(() => {
        //   setLoadingProgress((prev) => (prev < 90 ? prev + 10 : prev));
        // }, 500); // Increment progress every 500ms until 90%
        console.log("sent");
        const response = await axios.post(
          "http://localhost:8000/generate_final_ans_nist90b/",
          {
            binary_data: binaryInput,
            scheduled_time: scheduledTime,
          }
        );

        // clearInterval(progressInterval); // Stop the interval
        // setLoadingProgress(100); // Set progress to 100% after response is received
        setResultNIST90B(response.data); // Set the result data
      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress(0); // Reset progress in case of failure
      }
    };

    fetchResult();
  }, [binaryInput]);

  useEffect(() => {
    if (!binaryInput || binaryInput === "Error fetching data" ) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      // setLoadingProgress(0); // Start loading from 0%

      try {
        // let progressInterval = setInterval(() => {
        //   setLoadingProgress((prev) => (prev < 90 ? prev + 10 : prev));
        // }, 500); // Increment progress every 500ms until 90%

        const response = await axios.post(
          "http://localhost:8000/generate_final_ans_dieharder/",
          {
            binary_data: binaryInput,
            scheduled_time: scheduledTime,
          }
        );

        // clearInterval(progressInterval); // Stop the interval
        // setLoadingProgress(100); // Set progress to 100% after response is received
        setResultDieharder(response.data); // Set the result data
      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress(0); // Reset progress in case of failure
      }
    };

    fetchResult();
  }, [binaryInput]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedScheduledTime(scheduledTime2);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [scheduledTime2]);

    useEffect(() => {
      if (!binaryInput2 || !debouncedScheduledTime) return;// Do not fetch if binaryInput is empty
      console.log(debouncedScheduledTime);
      const fetchResult = async () => {
        setLoadingProgress2(0); // Start loading from 0%
  
        try {
          let progressInterval = setInterval(() => {
            setLoadingProgress2((prev) => (prev < 90 ? prev + 10 : prev));
          }, 500); // Increment progress every 500ms until 90%
          console.log("sent");
          const response = await axios.post("http://localhost:8000/generate_final_ans/", {
            binary_data: binaryInput2,
            scheduled_time: debouncedScheduledTime,
          });
  
          clearInterval(progressInterval); // Stop the interval
          setLoadingProgress2(100); // Set progress to 100% after response is received
          setResultNIST2(response.data); // Set the result data
        } catch (error) {
          console.error("Error executing generating final answer:", error);
          setLoadingProgress2(0); // Reset progress in case of failure
        }
      };
  
      fetchResult();
    }, [binaryInput2, debouncedScheduledTime]);

    useEffect(() => {
      if (!binaryInput2 || !debouncedScheduledTime) return;// Do not fetch if binaryInput is empty
  
      const fetchResult = async () => {
        setLoadingProgress(0); // Start loading from 0%
  
        try {
          let progressInterval = setInterval(() => {
            setLoadingProgress((prev) => (prev < 90 ? prev + 10 : prev));
          }, 500); // Increment progress every 500ms until 90%
          console.log("sent");
          const response = await axios.post("http://localhost:8000/generate_final_ans_nist90b/", {
            binary_data: binaryInput2,
            scheduled_time: debouncedScheduledTime,
          });
  
          clearInterval(progressInterval); // Stop the interval
          setLoadingProgress(100); // Set progress to 100% after response is received
          setResultNIST90B2(response.data); // Set the result data
        } catch (error) {
          console.error("Error executing generating final answer:", error);
          setLoadingProgress(0); // Reset progress in case of failure
        }
      };
  
      fetchResult();
    }, [binaryInput2, debouncedScheduledTime]);

    useEffect(() => {
      if (!binaryInput2 || !debouncedScheduledTime) return;// Do not fetch if binaryInput is empty
  
      const fetchResult = async () => {
        setLoadingProgress(0); // Start loading from 0%
  
        try {
          let progressInterval = setInterval(() => {
            setLoadingProgress((prev) => (prev < 90 ? prev + 10 : prev));
          }, 500); // Increment progress every 500ms until 90%
          console.log("sent");
          const response = await axios.post("http://localhost:8000/generate_final_ans_dieharder/", {
            binary_data: binaryInput2,
            scheduled_time: debouncedScheduledTime,
          });
  
          clearInterval(progressInterval); // Stop the interval
          setLoadingProgress(100); // Set progress to 100% after response is received
          setResultDieharder2(response.data); // Set the result data
        } catch (error) {
          console.error("Error executing generating final answer:", error);
          setLoadingProgress(0); // Reset progress in case of failure
        }
      };
  
      fetchResult();
    }, [binaryInput2, debouncedScheduledTime]);

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
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          sx={{
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: colors.primary[700],
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            maxWidth: "fit-content",
            margin: "0 auto",
            "& > *": {
              transition: "all 0.2s ease",
              "&:hover": {
                transform: "translateY(-1px)"
              }
            }
          }}
        >
          {/* Binary Number Display - Compact */}
          <Typography
            variant="body2"
            color={colors.grey[100]}
            sx={{
              fontSize: "14px",
              minWidth: "160px",
              textAlign: "center",
              padding: "8px 12px",
              backgroundColor: colors.primary[600],
              borderRadius: "6px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
            }}
          >
            Binary: {binaryInput || "00000000"}
          </Typography>

          {/* Compact Action Buttons */}
          <Button
            onClick={startFetching}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: colors.greenAccent[400],
              color: colors.primary[100],
              borderRadius: "6px",
              padding: "6px 12px",
              fontSize: "12px",
              fontWeight: "bold",
              minWidth: "100px",
              "&:hover": {
                backgroundColor: colors.greenAccent[500],
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
              }
            }}
          >
            Start
          </Button>

          <Button
            onClick={stopFetching}
            disabled={!isFetching}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: isFetching ? colors.redAccent[400] : colors.primary[300],
              color: colors.primary[100],
              borderRadius: "6px",
              padding: "6px 12px",
              fontSize: "12px",
              fontWeight: "bold",
              minWidth: "100px",
              "&:hover": {
                backgroundColor: isFetching ? colors.redAccent[500] : colors.primary[300],
                boxShadow: isFetching ? "0 2px 6px rgba(0,0,0,0.15)" : "none"
              }
            }}
          >
            Stop
          </Button>

          {/* Compact Length Input */}
          <TextField
            label=""
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            variant="outlined"
            size="small"
            sx={{
              width: "90px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: colors.grey[400]
                },
                "&:hover fieldset": {
                  borderColor: colors.grey[100]
                }
              },
              "& .MuiInputLabel-root": {
                color: colors.grey[100],
                fontSize: "12px",
                transform: "translate(14px, 10px) scale(1)"
              },
              "& .MuiInputBase-input": {
                color: colors.grey[100],
                fontSize: "12px",
                padding: "8.5px 14px"
              }
            }}
          />

        
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: "60px",
              height: "60px",
              position: "relative",
              "&:hover": {
                transform: "scale(1.03)"
              }
            }}
          >
            <CircularProgress
              variant="determinate"
              value={loadingProgress}
              size={45}
              thickness={5}
              sx={{
                color: colors.greenAccent[400],
                position: "absolute"
              }}
            />
            <CircularProgress
              variant="determinate"
              value={100}
              size={45}
              thickness={5}
              sx={{
                color: colors.primary[500],
                opacity: 0.3
              }}
            />
            <Typography
              variant="caption"
              fontWeight="bold"
              color={colors.grey[100]}
              sx={{
                position: "absolute",
                fontSize: "12px"
              }}
            >
              {loadingProgress}%
            </Typography>
          </Box>

          {/* Compact Live Indicator */}
          {isLive && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                backgroundColor: "#4caf50",
                color: "#ffffff",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "12px",
                boxShadow: "0 1px 6px rgba(76, 175, 80, 0.3)",
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%": { boxShadow: "0 0 0 0 rgba(76, 175, 80, 0.5)" },
                  "70%": { boxShadow: "0 0 0 6px rgba(76, 175, 80, 0)" },
                  "100%": { boxShadow: "0 0 0 0 rgba(76, 175, 80, 0)" }
                }
              }}
            >
              <Circle sx={{ color: "#ffffff", fontSize: "12px" }} />
              Live
            </Box>
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
            title={resultNIST ? resultNIST.final_result : "-"}
            subtitle="Result SP 800-20B  Tests"
            // progress={0.3} // Changed from string to number
            // increase="+5%"
            icon={
              <AccessTimeOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: 26 }}
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
            title={resultNIST90B ? resultNIST90B.final_result : "-"}
            subtitle="Result SP 800-90B  Tests"
            // progress={0.3} // Changed from string to number
            // increase="+5%"
            icon={
              <AccessTimeOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: 26 }}
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
            title={resultDieharder ? resultDieharder.final_result : "-"}
            subtitle="Result Dieharder Tests"
            // progress={0.3} // Changed from string to number
            // increase="+5%"
            icon={
              <AccessTimeOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: 26 }}
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
            title="0.5ms"
            subtitle="Current Time"

            icon={
              <AccessTimeOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Generated Graph
              </Typography>
            </Box>

          </Box>

          <div
            style={{
              width: "100%",
              height: "70vh",
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

      <Box
        mt="40px"
        p="20px"
        sx={{
          backgroundColor: colors.primary[400],
          borderRadius: "8px",
        }}
      >
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
           
              <th style={{ width: "30%" }}>Upload File</th>
              <th style={{ width: "10%" }}>SP 800-22B Result</th>
              <th style={{ width: "10%" }}>SP 800-90B Result</th>
              <th style={{ width: "10%" }}>DieHarder Result</th>
              <th style={{ width: "10%" }}>Progress Bar</th>
              <th style={{ width: "10%" }}>Uploading Time</th>
              <th style={{ width: "10%" }}>Filename</th>
              <th style={{ width: "20%" }}>Scheduling Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload}
                      sx={{
                        backgroundColor: colors.greenAccent[400],
                        color: colors.grey[100],
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: colors.greenAccent[500],
                        },
                      }}
                    >
                      Upload Binary File
                    </Button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                   
                    <Box display="flex" alignItems="center" gap="10px">
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick2("report")}
                        sx={{
                          backgroundColor: colors.redAccent[400],
                          color: colors.grey[100],
                          textTransform: "none",
                          padding: "10px 20px",
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: colors.redAccent[500],
                          },
                        }}
                      >
                        Generate Report
                      </Button>



                    </Box>
                  </Box>
                </Box>
              </td>
              <td>{resultNIST2 ? resultNIST2.final_result : "-"}</td>
              <td>{resultNIST90B2 ? resultNIST90B2.final_result : "-"}</td>
              <td>{resultDieharder2 ? resultDieharder2.final_result : "-"}</td>
           
              <td>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                  height="100%"
                  p="5px"
                >
                  <CircularProgress
                    variant="determinate"
                    value={loadingProgress2} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress2}%
                  </Typography>
                </Box>
              </td>


              <td>{uploadTime || ""}</td>
              <td>{fileName || "No file selected"}</td>
              <td>
                <TextField
                  label="Select Date"
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  size="small"
                  sx={{
                    "& .MuiInputBase-input": {
                      textAlign: "center",
                    },
                    marginBottom: "10px",
                  }}
                />

                {/* Time Input */}
                <TextField
                  label="Enter Time (HH:mm:ss)"
                  placeholder="e.g., 14:30:00"
                  value={time}
                  onChange={handleTimeChange}
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  size="small"
                  sx={{
                    "& .MuiInputBase-input": {
                      textAlign: "center",
                    },
                  }}
                />

                {/* Display Combined Scheduled Time */}
                <Typography variant="body2" mt={0.5} sx={{ color: "#4CCEAC" }}>
                  Scheduled Time: {scheduledTime2 || "Not set"}
                </Typography>
              </td>


            </tr>

          
          </tbody>
        </Box>


      </Box>
      
      <Box
  sx={{
    background: "linear-gradient(135deg, #1F2A40 30%, #29314F 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "250px",
    textAlign: "center",
   
    mt: 3,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
    position: "relative",
    overflow: "hidden",
    '&:hover': {
      boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.4)",
    },
    transition: "all 0.5s ease",
  }}
>
  {/* Animated background elements */}
  <Box
    sx={{
      position: "absolute",
      top: -50,
      left: -50,
      width: 100,
      height: 100,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
      animation: "float 15s infinite ease-in-out",
    }}
  />
  <Box
    sx={{
      position: "absolute",
      bottom: -30,
      right: -30,
      width: 120,
      height: 120,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)",
      animation: "float 18s infinite ease-in-out 2s",
    }}
  />
  
  {/* Floating AI Elements with animation */}
  <AutoAwesomeIcon
    sx={{
      position: "absolute",
      top: 20,
      left: 30,
      fontSize: 40,
      color: "rgba(255, 255, 255, 0.3)",
      animation: "pulse 4s infinite ease-in-out",
    }}
  />
  <AutoAwesomeIcon
    sx={{
      position: "absolute",
      bottom: 20,
      right: 30,
      fontSize: 40,
      color: "rgba(255, 255, 255, 0.3)",
      animation: "pulse 5s infinite ease-in-out 1s",
    }}
  />
  
  {/* Animated Gemini Logo */}
  <Box
    component="img"
    src="/image.png"
    alt="Gemini Logo"
    sx={{ 
      width: 80, 
      height: "auto", 
      mb: 2, 
      borderRadius: "12px",
      transition: "all 0.5s ease",
      transform: "translateY(0)",
      animation: "floatLogo 6s infinite ease-in-out",
      '&:hover': {
        transform: "scale(1.1) rotate(5deg)",
      }
    }}
  />
  
  {/* Button with enhanced animation */}
  <Button
    variant="contained"
    onClick={() => {
      window.open("http://localhost:3000/report", "_blank");
    }}
    sx={{
      backgroundColor: "#E63946",
      color: "white",
      textTransform: "none",
      padding: "15px 40px",
      fontSize: "1.5rem",
      width: "50%",
      maxWidth: "320px",
      borderRadius: "8px",
      transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
      '&:hover': {
        backgroundColor: "#F77F00",
        transform: "scale(1.05)",
        boxShadow: "0px 8px 20px rgba(255, 99, 71, 0.6)",
      },
      '&::before': {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        transition: "all 0.7s ease",
        zIndex: -1,
      },
      '&:hover::before': {
        left: "100%",
      }
    }}
  >
    Analyze with AI
  </Button>

  {/* Glow effect on hover */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "radial-gradient(circle at center, rgba(230, 57, 70, 0.1) 0%, transparent 70%)",
      opacity: 0,
      transition: "opacity 0.5s ease",
      pointerEvents: "none",
      '&:hover': {
        opacity: 1,
      }
    }}
  />
</Box>

{/* Define keyframes in your global styles */}
<style jsx global>{`
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-20px) translateX(20px);
    }
  }
  
  @keyframes floatLogo {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }
`}</style>
      
    </Box>
  );
};

export default Dashboard;
