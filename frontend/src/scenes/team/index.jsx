import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState, useEffect, useRef } from "react";
import axios from "axios"; // Make sure axios is imported

const MAX_STACK_SIZE_ESTIMATE = 1 * 1024 * 1024;

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [binaryInput, setBinaryInput] = useState("");
  const fileInputRef = useRef(null);

  const [frequencyTestResponse, setFrequencyTestResponse] = useState(null);
  const [frequencyBlockTestResponse, setFrequencyBlockTestResponse] =
    useState(null);
  const [runTestResponse, setrunTestResponse] = useState(null);
  const [ApproximateEntropyTestResponse, setApproximateEntropyTestResponse] =
    useState(null);
  const [runLinearComplexityTestResponse, setrunLinearComplexityTestResponse] =
    useState(null);
  const [runNonOverlappingTestResponse, setrunNonOverlappingTestResponse] =
    useState(null);
  const [runOverlappingTestResponse, setrunOverlappingTestResponse] =
    useState(null);
  const [runUniversalTestResponse, setrunUniversalTestResponse] = useState(null);
  const [runSerialTestResponse, setrunSerialTestResponse] = useState(null);
  const [runCumulativeSumsTestResponse, setrunCumulativeSumsTestResponse] =
    useState(null);
  const [runlongestOneBlockTestResponse, setrunlongestOneBlockTestResponse] =
    useState(null);
  const [runBinaryMatrixRankTestResponse, setrunBinaryMatrixRankTestResponse] =
    useState(null);
  const [runSpectralTestResponse, setrunSpectralTestResponse] = useState(null);

  const [runAutoCorrelationtResponse, setrunAutoCorrelationtResponse] = useState(null);

  const [runAdaptiveStatisticalTestResponse, setrunAdaptiveStatisticalTestResponse] = useState(null);

  const [runRandomExcursionsTestResponse, setrunRandomExcursionsTestResponse] = useState('');

  const [runRandomExcursionsVariantTestResponse, setrunRandomExcursionsVariantTestResponse] = useState('');


  // Handle binary input change
  const handleBinaryChange = (event) => {
    const value = event.target.value;

    setBinaryInput(value);
  };

  // Handle file upload
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile.size > MAX_STACK_SIZE_ESTIMATE) {
      alert("Warning: The selected file is too large. Please choose a smaller file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();
      setBinaryInput(textData);
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  // Fetch the frequency test data based on the binary input
  useEffect(() => {
    if (!binaryInput) return; // Do not fetch if binaryInput is empty

    const fetchFrequencyTestData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/run_frequency_test/', { binary_data: binaryInput });
        setFrequencyTestResponse(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing frequency test:", error);
      }
    };

    fetchFrequencyTestData();
  }, [binaryInput]); // Trigger when binaryInput changes

  useEffect(() => {
    if (!binaryInput) return;

    const fetchFrequencyBlockTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_frequency_block_test/',
          { binary_data: binaryInput  }
        );
        setFrequencyBlockTestResponse(response.data);
      } catch (error) {
        console.error("Error executing frequency block test:", error);
      }
    };

    fetchFrequencyBlockTestData();
  }, [binaryInput]);

  useEffect(() => {
    const fetchrunTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_runs_test/',
          { binary_data: binaryInput }
        );
        setrunTestResponse(response.data);
      } catch (error) {
        console.error("Error executing run test:", error);
      }
    };

    fetchrunTestData();
  }, [binaryInput]);

  useEffect(() => {
    const fetchrunlongestOneBlockTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_longest_one_block_test/',
          { binary_data: binaryInput }
        );
        setrunlongestOneBlockTestResponse(response.data);
      } catch (error) {
        console.error("Error executing run test:", error);
      }
    };

    fetchrunlongestOneBlockTestData();
  }, [binaryInput]);

  useEffect(() => {
    const fetchApproximateEntropyTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_approximate_entropy_test/',
          { binary_data: binaryInput }
        );
        setApproximateEntropyTestResponse(response.data);
      } catch (error) {
        console.error("Error executing Approximate Entropy test:", error);
      }
    };
    fetchApproximateEntropyTestData();
  }, [binaryInput]);

  useEffect(() => {
    const fetchrunLinearComplexityTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_linear_complexity_test/',
          { binary_data: binaryInput }
        );
        setrunLinearComplexityTestResponse(response.data);
      } catch (error) {
        console.error("Error executing linear complexity test:", error);
      }
    };
    fetchrunLinearComplexityTestData();
  }, [binaryInput]);

  useEffect(() => {
    const fetchrunNonOverlappingTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_non_overlapping_test/',
          { binary_data: binaryInput }
        );
        setrunNonOverlappingTestResponse(response.data);
      } catch (error) {
        console.error("Error executing Non-overlapping test:", error);
      }
    };
    fetchrunNonOverlappingTestData();
  }, [binaryInput]);
  
  useEffect(() => {
    const fetchrunOverlappingTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_overlapping_test/',
          { binary_data: binaryInput }
        );
        setrunOverlappingTestResponse(response.data);
      } catch (error) {
        console.error("Error executing Overlapping test:", error);
      }
    };
    fetchrunOverlappingTestData();
  }, [binaryInput]);

  useEffect(() => {
    const fetchrunUniversalTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_statistical_test/',
          {binary_data: binaryInput}
        );
        setrunUniversalTestResponse(response.data);
      } catch (error) {
        console.error("Error executing Universal test:", error);
      }
    };
    fetchrunUniversalTestData();
  }, [binaryInput]);
  
  useEffect(() => {
    const fetchrunSerialTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_serial_test/',
          {binary_data: binaryInput}
        );
        setrunSerialTestResponse(response.data);
      } catch (error) {
        console.error("Error executing Serial test:", error);
      }
    };
    fetchrunSerialTestData();
  }, [binaryInput]);

  useEffect(() => {
    const fetchrunCumulativeSumsTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_cumulative_sums_test/',
          {binary_data: binaryInput}
        );
        setrunCumulativeSumsTestResponse(response.data);
      } catch (error) {
        console.error("Error executing Cumulative Sums test:", error);
      }
    };
    fetchrunCumulativeSumsTestData();
  }, [binaryInput]);

  useEffect(() => {
    const fetchrunBinaryMatrixRankTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_binary_matrix_rank_text/',
          {binary_data: binaryInput}
        );
        setrunBinaryMatrixRankTestResponse(response.data);
      } catch (error) {
        console.error("Error executing Cumulative Sums test:", error);
      }
    };
    fetchrunBinaryMatrixRankTestData();
  }, [binaryInput]);

  useEffect(() => {
    const fetchrunSpectralTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_spectral_test/',
          {binary_data: binaryInput}
        );
        setrunSpectralTestResponse(response.data);
      } catch (error) {
        console.error("Error executing Cumulative Sums test:", error);
      }
    };
    fetchrunSpectralTestData();
  }, [binaryInput]);

  useEffect(() => {
    const fecthrunAutoCorrelationtData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_autocorrelation_test/',
          {binary_data: binaryInput}
        );
        setrunAutoCorrelationtResponse(response.data);
      } catch (error) {
        console.error("Error executing auto correlation test:", error);
      }
    };
    fecthrunAutoCorrelationtData();
  }, [binaryInput]);
  
  useEffect(() => {
    const fetchrunSpectralTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_spectral_test/',
          {binary_data: binaryInput}
        );
        setrunSpectralTestResponse(response.data);
      } catch (error) {
        console.error("Error executing Cumulative Sums test:", error);
      }
    };
    fetchrunSpectralTestData();
  }, [binaryInput]);

  useEffect(() => {
    const fetchrunAdaptiveStatisticalTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_adaptive_statistical_test/',
          {binary_data: binaryInput}
        );
        setrunAdaptiveStatisticalTestResponse(response.data);
      } catch (error) {
        console.error("Error executing adaptive statistical test:", error);
      }
    };
    fetchrunAdaptiveStatisticalTestData();
  }, [binaryInput]);

  useEffect(() => {
    const fetchrunRandomExcursionsTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/random_excursions_test/', 
          { binary_data: binaryInput }
        );
        setrunRandomExcursionsTestResponse(response.data);
      } catch (error) {
        console.error('Error executing Random Excursions test:', error);
      }
    };
  
    fetchrunRandomExcursionsTestData();
  }, [binaryInput]);

  useEffect(() => {
    const fetchRunRandomExcursionsVariantTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/random_excursions_variant_test/', 
          { binary_data: binaryInput } // Sending binary data in the request body
        );
        setrunRandomExcursionsVariantTestResponse(response.data); // Update state with response
      } catch (error) {
        console.error('Error executing Random Excursions Variant test:', error);
      }
    };
  
    fetchRunRandomExcursionsVariantTestData();
  }, [binaryInput]); 

  const RandomExTestPValue = runRandomExcursionsTestResponse?.p_value ;
  const RandomExTestResult = runRandomExcursionsTestResponse?.result ;

  const RandomExVarTestPValue = runRandomExcursionsVariantTestResponse?.p_value ;
  const RandomExVarTestResult = runRandomExcursionsVariantTestResponse?.result ;


  // Extract p-value and result from frequencyTestResponse and update the table
  const frequencyTestPValue = frequencyTestResponse?.p_value ;
  const frequencyTestResult = frequencyTestResponse?.result ;

  const frequencyTestBlockPValue = frequencyBlockTestResponse?.p_value ;
  const frequencyTestBlockResult = frequencyBlockTestResponse?.result ;

  const RunsTestPValue = runTestResponse?.p_value ;
  const RunsTestResult = runTestResponse?.result ;

  const AppEntropyTestPValue = ApproximateEntropyTestResponse?.p_value ;
  const AppEntropyTestResult = ApproximateEntropyTestResponse?.result ;
  
  const LCTestPValue = runLinearComplexityTestResponse?.p_value ;
  const LCTestResult = runLinearComplexityTestResponse?.result ;
  
  const BMTestPValue = runBinaryMatrixRankTestResponse?.p_value ;
  const BMTestResult = runBinaryMatrixRankTestResponse?.result ;
  
  const NonOverTestPValue = runNonOverlappingTestResponse?.p_value ;
  const NonOverTestResult = runNonOverlappingTestResponse?.result ;
  
  const MaurerTestPValue = runUniversalTestResponse?.p_value ;
  const MaurerTestResult = runUniversalTestResponse?.result ;
  
  const SerialTestPValue = runSerialTestResponse?.p_value ;
  const SerialTestResult = runSerialTestResponse?.result ;
  
  const CusumTestPValue = runCumulativeSumsTestResponse?.p_value ;
  const CusumTestResult = runCumulativeSumsTestResponse?.result ;
  
  const AutocorTestPValue = runAutoCorrelationtResponse?.p_value ;
  const AutocorTestResult = runAutoCorrelationtResponse?.result ;
  
  const AdaptStatTestPValue = runAdaptiveStatisticalTestResponse?.p_value ;
  const AdaptStatTestResult = runAdaptiveStatisticalTestResponse?.result ;
  
  const LongRunOneTestPValue = runlongestOneBlockTestResponse?.p_value ;
  const LongRunOneTestResult = runlongestOneBlockTestResponse?.result ;
  
  const DFTTestPValue = runSpectralTestResponse?.p_value ;
  const DFTTestResult = runSpectralTestResponse?.result ;
  
  const OverTestPValue = runOverlappingTestResponse?.p_value ;
  const OverTestResult = runOverlappingTestResponse?.result ;
  

  const handleButtonClick = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report/", {
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

  return (
    <Box m="20px">
      {/* Header Section */}
      <Header title="NIST Statistical Tests" />

      {/* Input Box */}
      <Box mt="20px">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter the binary number"
          value={binaryInput}
          onChange={handleBinaryChange}
          InputProps={{
            style: { backgroundColor: colors.primary[400], borderRadius: 8 },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: colors.greenAccent[300] },
              "&:hover fieldset": { borderColor: colors.greenAccent[400] },
              "&.Mui-focused fieldset": { borderColor: colors.greenAccent[500] },
            },
          }}
        />
      </Box>

      {/* Buttons Section */}
      <Box mt="20px" display="flex" justifyContent="center" gap="20px">
        <Button
          variant="contained"
          onClick={handleFileUpload}
          sx={{
            backgroundColor: colors.greenAccent[400],
            color: colors.grey[100],
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            "&:hover": { backgroundColor: colors.greenAccent[500] },
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
        <Button
          variant="contained"
          onClick={() => handleButtonClick("graph")}
          sx={{
            backgroundColor: colors.blueAccent[400],
            color: colors.grey[100],
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            "&:hover": { backgroundColor: colors.blueAccent[500] },
          }}
        >
          Generate Graph
        </Button>
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
      </Box>

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
              <th>Serial No</th>
              <th>Test</th>
              <th>p-value</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Frequency Test</td>
              <td>{frequencyTestPValue}</td>
              <td>{frequencyTestResult}</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Frequency Test (within a block)</td>
              <td>{frequencyTestBlockPValue}</td>
              <td>{frequencyTestBlockResult}</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Runs Test</td>
              <td>{RunsTestPValue}</td>
              <td>{RunsTestResult}</td>
            </tr>

            <tr>
              <td>4</td>
              <td>Approximate Entorpy Test</td>
              <td>{AppEntropyTestPValue}</td>
              <td>{AppEntropyTestResult}</td>
            </tr>

            <tr>
              <td>5</td>
              <td>Linear Complexity Test</td>
              <td>{LCTestPValue}</td>
              <td>{LCTestResult}</td>
            </tr>

            <tr>
              <td>6</td>
              <td>Binary Matrix Rank Test</td>
              <td>{BMTestPValue}</td>
              <td>{BMTestResult}</td>
            </tr>

            <tr>
              <td>7</td>
              <td>Non overlapping Template MatchingTest</td>
              <td>{NonOverTestPValue}</td>
              <td>{NonOverTestResult}</td>
            </tr>

            <tr>
              <td>8</td>
              <td>Maurer's Universal Statistical Test</td>
              <td>{MaurerTestPValue}</td>
              <td>{MaurerTestResult}</td>
            </tr>

            <tr>
              <td>9</td>
              <td>Serial Test</td>
              <td>{SerialTestPValue}</td>
              <td>{SerialTestResult}</td>
            </tr>

           
            <tr>
              <td>10</td>
              <td>Cumulative Sums Test</td>
              <td>{CusumTestPValue}</td>
              <td>{CusumTestResult}</td>
            </tr>

            <tr>
              <td>11</td>
              <td>Autocorrelation Test</td>
              <td>{AutocorTestPValue}</td>
              <td>{AutocorTestResult}</td>
            </tr>

            <tr>
              <td>12</td>
              <td>Adaptive Statistical Test</td>
              <td>{AdaptStatTestPValue}</td>
              <td>{AdaptStatTestResult}</td>
            </tr>

            <tr>
              <td>13</td>
              <td>Longest Run of Ones Test</td>
              <td>{LongRunOneTestPValue}</td>
              <td>{LongRunOneTestResult}</td>
            </tr>

            <tr>
              <td>14</td>
              <td>Discrete Fourier Transform Test</td>
              <td>{DFTTestPValue}</td>
              <td>{DFTTestResult}</td>
            </tr>

            <tr>
              <td>15</td>
              <td>Overlapping Template Matching Test</td>
              <td>{OverTestPValue}</td>
              <td>{OverTestResult}</td>
            </tr>

            
            <tr>
              <td>16</td>
              <td>Random Excursion Test</td>
              <td>{RandomExTestPValue}</td>
              <td>{RandomExTestResult}</td>
            </tr>

            
            <tr>
              <td>17</td>
              <td>Random Excursion Variant Test</td>
              <td>{RandomExVarTestPValue}</td>
              <td>{RandomExVarTestResult}</td>
            </tr>

            

           

          </tbody>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
