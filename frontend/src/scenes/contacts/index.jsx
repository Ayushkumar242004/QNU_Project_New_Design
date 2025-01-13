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


  const [runBinarySpacingsTestResponse, setrunBinarySpacingsTestResponse] = useState("");
  const [runParkingLotTestResponse, setrunParkingLotTestResponse] = useState("");
  const [runOverlapping5PermutationTestResponse, setrunOverlapping5PermutationTestResponse] = useState("");
  const [runMinimumDistanceTestResponse, setrunMinimumDistanceTestResponse] = useState("");
  const [run31MatrixTestResponse, setrun31MatrixTestResponse] = useState("");
  const [runSpeheresTestResponse, setrunSpeheresTestResponse] = useState("");
  const [run32MatrixTestResponse, setrun32MatrixTestResponse] = useState("");
  const [runCrapsTestResponse, setrunCrapsTestResponse] = useState("");
  const [runBitstreamTestResponse, setrunBitstreamTestResponse] = useState("");
  const [rungcdTestResponse, setrungcdTestResponse] = useState("");
  const [runopsoTestResponse, setrunopsoTestResponse] = useState("");
  const [runoqsoTestResponse, setrunoqsoTestResponse] = useState("");
  const [rundnaTestResponse, setrundnaTestResponse] = useState("");
  const [runoneStreamTestResponse, setrunoneStreamTestResponse] = useState("");
  const [runoneByteTestResponse, setrunoneByteTestResponse] = useState("");
  const [rungcdSimpleTestResponse, setrungcdSimpleTestResponse] = useState("");
  const [rungeneralisedMinimumTestResponse, setrungeneralisedMinimumTestResponse] = useState("");
  const [runu01LinearComplexityTestResponse, setrunu01LinearComplexityTestResponse] = useState("");
  const [runu01LongestSubstringTestResponse, setrunu01LongestSubstringTestResponse] = useState("");
  const [runmatrixRankTestResponse, setrunmatrixRankTestResponse] = useState("");



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

  useEffect(() => {
    const runBinarySpacingsTestData = async () => {
      try {
       
        const response = await axios.post(
          'http://localhost:8000/run_binary_spacings_test/', // POST endpoint
          { binary_data: binaryInput } // JSON payload
        );
      
        setrunBinarySpacingsTestResponse(response.data); // Update response state
      } catch (error) {
        console.error("Error executing binary spacings test:", error);
      }
    };
  
    runBinarySpacingsTestData();
  }, [binaryInput]); 

  useEffect(() => {
    if (!binaryInput) return; // Do not fetch if binaryInput is empty
    const runParkingLotTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_parking_lot_test/', // The POST endpoint
          { binary_data: binaryInput } // Data sent in the POST request body
        );
        setrunParkingLotTestResponse(response.data);
      } catch (error) {
        console.error("Error executing parking lot test:", error);
      }
    };
  
    if (binaryInput) {
      runParkingLotTestData();
    }
  }, [binaryInput]);

  
  useEffect(() => {
    const runOverlapping5PermutationTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_overlapping_5_test/',
          { binary_data: binaryInput }
        );
        setrunOverlapping5PermutationTestResponse(response.data);
      } catch (error) {
        console.error("Error executing overlapping 5 test:", error);
      }
    };

    if (binaryInput){
    runOverlapping5PermutationTestData();
    }
  }, [binaryInput]);


  useEffect(() => {
    const runMinimumDistanceTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_minimum_distance_test/',
          { binary_data: binaryInput }
        );
        setrunMinimumDistanceTestResponse(response.data);
      } catch (error) {
        console.error("Error executing minimum distance test:", error);
      }
    };

    runMinimumDistanceTestData();
  }, [binaryInput]);

  useEffect(() => {
    const run31MatrixTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_31matrix_test/',
          { binary_data: binaryInput }
        );
        setrun31MatrixTestResponse(response.data);
      } catch (error) {
        console.error("Error executing 31 matrix test:", error);
      }
    };

    run31MatrixTestData();
  }, [binaryInput]);

  useEffect(() => {
    const runSpheresTestData = async () => {
      try {
        const response = await axios.post(
        'http://localhost:8000/run_spheres_test/',
        { binary_data: binaryInput }
        );
        setrunSpeheresTestResponse(response.data);
      } catch (error) {
        console.error("Error executing spheres test:", error);
      }
    };

    runSpheresTestData();
  }, [binaryInput]);

  useEffect(() => {
    const run32MatrixTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_32matrix_test/',
          { binary_data: binaryInput }
        );
        setrun32MatrixTestResponse(response.data);
      } catch (error) {
        console.error("Error executing 32 matrix test:", error);
      }
    };

    run32MatrixTestData();
  }, [binaryInput]);

  useEffect(() => {
    const runCrapsTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_craps_test/',
          { binary_data: binaryInput }
        );
        setrunCrapsTestResponse(response.data);
      } catch (error) {
        console.error("Error executing craps test:", error);
      }
    };

    runCrapsTestData();
  }, [binaryInput]);

  
  useEffect(() => {
    const runBitstreamTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_bitstream_test/',
          { binary_data: binaryInput }
        );
        setrunBitstreamTestResponse(response.data);
      } catch (error) {
        console.error("Error executing bitstream test:", error);
      }
    };

    runBitstreamTestData();
  }, [binaryInput]);

  useEffect(() => {
    const rungcdTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_gcd_test/',
          { binary_data: binaryInput }
        );
        setrungcdTestResponse(response.data);
      } catch (error) {
        console.error("Error executing gcd test:", error);
      }
    };

    rungcdTestData();
  }, [binaryInput]);

  
  useEffect(() => {
    const runopsoTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_opso_test/',
          { binary_data: binaryInput }
        );
        setrunopsoTestResponse(response.data);
      } catch (error) {
        console.error("Error executing opso test:", error);
      }
    };

    runopsoTestData();
  }, [binaryInput]);

  useEffect(() => {
    const runoqsoTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_oqso_test/',
          { binary_data: binaryInput }
        );
        setrunoqsoTestResponse(response.data);
      } catch (error) {
        console.error("Error executing oqso test:", error);
      }
    };

    runoqsoTestData();
  }, [binaryInput]);

  useEffect(() => {
    const runoneStreamTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_count_one_test/',
          { binary_data: binaryInput }
        );
        setrunoneStreamTestResponse(response.data);
      } catch (error) {
        console.error("Error executing one stream test:", error);
      }
    };

    runoneStreamTestData();
  }, [binaryInput]);


  useEffect(() => {
    const rundnaTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_dna_test/',
          { binary_data: binaryInput }
        );
        setrundnaTestResponse(response.data);
      } catch (error) {
        console.error("Error executing dna test:", error);
      }
    };

    rundnaTestData();
  }, [binaryInput]);



  useEffect(() => {
    const runoneByteTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_count_one_byte_test/',
          { binary_data: binaryInput }
        );
        setrunoneByteTestResponse(response.data);
      } catch (error) {
        console.error("Error executing one byte test:", error);
      }
    };

    runoneByteTestData();
  }, [binaryInput]);



  useEffect(() => {
    const rungcdSimpleTestData = async () => {
      try {
        const response = await axios.post(
        'http://localhost:8000/run_simple_gcd_test/',
        { binary_data: binaryInput }
        );
        setrungcdSimpleTestResponse(response.data);
      } catch (error) {
        console.error("Error executing gcd simple test:", error);
      }
    };

    rungcdSimpleTestData();
  }, [binaryInput]);



  useEffect(() => {
    const rungeneralisedMinimumDistanceTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_general_minimum_distance_test/',
          { binary_data: binaryInput }
        );
        setrungeneralisedMinimumTestResponse(response.data);
      } catch (error) {
        console.error("Error executing generalised minimum test:", error);
      }
    };

    rungeneralisedMinimumDistanceTestData();
  }, [binaryInput]);



  useEffect(() => {
    const runu01LinearComplexityTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_u01_linear_complexity_test/',
          { binary_data: binaryInput }
        );
        setrunu01LinearComplexityTestResponse(response.data);
      } catch (error) {
        console.error("Error executing linear complexity test:", error);
      }
    };

    runu01LinearComplexityTestData();
  }, [binaryInput]);




  useEffect(() => {
    const runu01LongestSubstringTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_u01_longest_repeated_substring_test/',
          { binary_data: binaryInput }
        );
        setrunu01LongestSubstringTestResponse(response.data);
      } catch (error) {
        console.error("Error executing longest substring test:", error);
      }
    };

    runu01LongestSubstringTestData();
  }, [binaryInput]);




  useEffect(() => {
    const runmatrixRankTestData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/run_matrix_rank_test/',
          { binary_data: binaryInput }
        );
        setrunmatrixRankTestResponse(response.data);
      } catch (error) {
        console.error("Error executing matrix rank test:", error);
      }
    };

    runmatrixRankTestData();
  }, [binaryInput]);



  const BSTestPValue = runBinarySpacingsTestResponse?.p_value || "N/A";
  const BSTestResult = runBinarySpacingsTestResponse?.result || "N/A";


  const OverPermTestPValue = runOverlapping5PermutationTestResponse?.p_value || "N/A";
  const OverPermTestResult = runOverlapping5PermutationTestResponse?.result || "N/A";

  const Rank31TestPValue = run31MatrixTestResponse?.p_value || "N/A";
  const Rank31TestResult = run31MatrixTestResponse?.result || "N/A";

  const Rank32TestPValue = run32MatrixTestResponse?.p_value || "N/A";
  const Rank32TestResult = run32MatrixTestResponse?.result || "N/A";
  
  const BitstreamTestPValue = runBitstreamTestResponse?.p_value || "N/A";
  const BitstreamTestResult = runBitstreamTestResponse?.result || "N/A";
  
  const OPSOPValue = runopsoTestResponse?.p_value || "N/A";
  const OPSOTestResult = runopsoTestResponse?.result || "N/A";
  
  const DNATestPValue = rundnaTestResponse?.p_value || "N/A";
  const DNATestResult = rundnaTestResponse?.result || "N/A";
  
  const OneStreamTestPValue = runoneStreamTestResponse?.p_value || "N/A";
  const OneStreamTestResult = runoneStreamTestResponse?.result || "N/A";
  
  const OneByteTestPValue = runoneByteTestResponse?.p_value || "N/A";
  const OneByteTestResult = runoneByteTestResponse?.result || "N/A";
  
  const ParkTestPValue = runParkingLotTestResponse?.p_value || "N/A";
  const ParkTestResult = runParkingLotTestResponse?.result || "N/A";
  
  const MinDisTestPValue = runMinimumDistanceTestResponse?.p_value || "N/A";
  const MinDisTestResult = runMinimumDistanceTestResponse?.result || "N/A";
  
  const SpheresTestPValue = runSpeheresTestResponse?.p_value || "N/A";
  const SpheresTestResult = runSpeheresTestResponse?.result || "N/A";
  
  const CrapsTestPValue = runCrapsTestResponse?.p_value || "N/A";
  const CrapsTestResult = runCrapsTestResponse?.result || "N/A";
  
  const GcdTestPValue = rungcdTestResponse?.p_value || "N/A";
  const GcdTestResult = rungcdTestResponse?.result || "N/A";
  
  const SimpleGcdTestPValue = rungcdSimpleTestResponse?.p_value || "N/A";
  const SimpleGcdTestResult = rungcdSimpleTestResponse?.result || "N/A";
  
  const GenMinDisTestPValue = rungeneralisedMinimumTestResponse?.p_value || "N/A";
  const GenMinDisTestResult = rungeneralisedMinimumTestResponse?.result || "N/A";
  
  const LCTestPValue = runu01LinearComplexityTestResponse?.p_value || "N/A";
  const LCTestResult = runu01LinearComplexityTestResponse?.result || "N/A";
  
  const RepSubTestPValue = runu01LongestSubstringTestResponse?.p_value || "N/A";
  const RepSubTestResult = runu01LongestSubstringTestResponse?.result || "N/A";
  
  const MatrixRankTestPValue = runmatrixRankTestResponse?.p_value || "N/A";
  const MatrixRankTestResult = runmatrixRankTestResponse?.result || "N/A";
  
  const OQSOTestPValue = runoqsoTestResponse?.p_value || "N/A";
  const OQSOTestResult = runoqsoTestResponse?.result || "N/A";
  

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
              <td>Birthday Spacings Test </td>
              <td>{BSTestPValue}</td>
              <td>{BSTestResult}</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Overlapping 5-Permutation Test</td>
              <td>{OverPermTestPValue}</td>
              <td>{OverPermTestResult}</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Ranks of 31x31 Matrices Test</td>
              <td>{Rank31TestPValue}</td>
              <td>{Rank31TestResult}</td>
            </tr>

            <tr>
              <td>4</td>
              <td>Ranks of 32x32 Matrices Test</td>
              <td>{Rank32TestPValue}</td>
              <td>{Rank32TestResult}</td>
            </tr>

            <tr>
              <td>5</td>
              <td>Bitstream Test</td>
              <td>{BitstreamTestPValue}</td>
              <td>{BitstreamTestResult}</td>
            </tr>

            <tr>
              <td>6</td>
              <td>Overlapping-Pairs-Sparse-Occupancy (OPSO) Test</td>
              <td>{OPSOPValue}</td>
              <td>{OPSOTestResult}</td>
            </tr>

            <tr>
              <td>7</td>
              <td>DNA Test</td>
              <td>{DNATestPValue}</td>
              <td>{DNATestResult}</td>
            </tr>

            <tr>
              <td>8</td>
              <td>Count-the-1s (stream) Test</td>
              <td>{OneStreamTestPValue}</td>
              <td>{OneStreamTestResult}</td>
            </tr>

            <tr>
              <td>9</td>
              <td>Count-the-1s (byte) Test</td>
              <td>{OneByteTestPValue}</td>
              <td>{OneByteTestResult}</td>
            </tr>

           
            <tr>
              <td>10</td>
              <td>Parking Lot Test</td>
              <td>{ParkTestPValue}</td>
              <td>{ParkTestResult}</td>
            </tr>

            <tr>
              <td>11</td>
              <td>Minimum Distance Test</td>
              <td>{MinDisTestPValue}</td>
              <td>{MinDisTestResult}</td>
            </tr>

            <tr>
              <td>12</td>
              <td>3d Spheres Test</td>
              <td>{SpheresTestPValue}</td>
              <td>{SpheresTestResult}</td>
            </tr>

            <tr>
              <td>13</td>
              <td>Craps Test</td>
              <td>{CrapsTestPValue}</td>
              <td>{CrapsTestResult}</td>
            </tr>

            <tr>
              <td>14</td>
              <td>Marsaglia-Tsang GCD Test</td>
              <td>{GcdTestPValue}</td>
              <td>{GcdTestResult}</td>
            </tr>

            <tr>
              <td>15</td>
              <td>Marsaglia-Tsang Simple GCD Test</td>
              <td>{SimpleGcdTestPValue}</td>
              <td>{SimpleGcdTestResult}</td>
            </tr>

            
            <tr>
              <td>16</td>
              <td>Generalized Minimum Distance Test</td>
              <td>{GenMinDisTestPValue}</td>
              <td>{GenMinDisTestResult}</td>
            </tr>

            
            <tr>
              <td>17</td>
              <td>TestU01 Linear Complexity Test</td>
              <td>{LCTestPValue}</td>
              <td>{LCTestResult}</td>
            </tr>

            
            <tr>
              <td>18</td>
              <td>TestU01 Longest Repeated Substring Test</td>
              <td>{RepSubTestPValue}</td>
              <td>{RepSubTestResult}</td>
            </tr>

            
            <tr>
              <td>19</td>
              <td>TestU01 Matrix Rank Test</td>
              <td>{MatrixRankTestPValue}</td>
              <td>{MatrixRankTestResult}</td>
            </tr>

            
            <tr>
              <td>20</td>
              <td>Overlapping-Quadruples-Sparse-Occupancy (OQSO) Test</td>
              <td>{OQSOTestPValue}</td>
              <td>{OQSOTestResult}</td>
            </tr>

            

           

          </tbody>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
