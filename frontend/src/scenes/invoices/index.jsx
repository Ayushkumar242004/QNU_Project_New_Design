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
  const [url, setUrl] = useState("http://localhost:3003/proxy"); // Default URL
  const [isFetching, setIsFetching] = useState(false); // Fetching status
  const [intervalId, setIntervalId] = useState(null); // Interval ID

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
    setIsFetching(true);
  };

  // Stop fetching binary data
  const stopFetching = () => {
    if (isFetching && intervalId) {
      clearInterval(intervalId); // Clear the interval
      setIsFetching(false);
    }
  };

  // Fetch binary data from the proxy server
  const fetchRandomNumber = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          API_Key: "6625a404-fcf7-aa22-595f-1ce908fc5ebb",
          APISalt: "$2a$04$nArWqsGVKLmYJ3ob48c2/.fL8hULjZTJLWdtTEstM4Ss8oqagInmu",
          Rand_type: 1, // Request binary data
          Length: 64, // Example length
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data && data.random) {
        setBinaryInput(data.random); // Update binaryInput state
      } else {
        throw new Error("Invalid API response format");
      }
    } catch (error) {
      console.error("Error fetching binary number:", error);
      setBinaryInput("Error fetching data");
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
  
  
  
  // Fetch data every 10 seconds when isFetching is active
  useEffect(() => {
    if (isFetching && url) {
      const id = setInterval(fetchRandomNumber, 5000);
      setIntervalId(id);
    }
    return () => clearInterval(intervalId);
  }, [isFetching, url]);
  
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
  const [runRandomExcursionsTestResponse, setrunRandomExcursionsTestResponse] = useState('');
  const [runRandomExcursionsVariantTestResponse, setrunRandomExcursionsVariantTestResponse] = useState('');



  
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

  
  ////////////////////////////////////

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



  // Extract p-value and result from frequencyTestResponse and update the table
  const frequencyTestPValue = frequencyTestResponse?.p_value ;
  const frequencyTestResult = frequencyTestResponse?.result ;

  const frequencyTestBlockPValue = frequencyBlockTestResponse?.p_value ;
  const frequencyTestBlockResult = frequencyBlockTestResponse?.result ;

  const RunsTestPValue = runTestResponse?.p_value ;
  const RunsTestResult = runTestResponse?.result ;

  const AppEntropyTestPValue = ApproximateEntropyTestResponse?.p_value ;
  const AppEntropyTestResult = ApproximateEntropyTestResponse?.result ;
  
  const LiCTestPValue = runLinearComplexityTestResponse?.p_value ;
  const LiCTestResult = runLinearComplexityTestResponse?.result ;
  
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
  
  const RandomExTestPValue = runRandomExcursionsTestResponse?.p_value ;
  const RandomExTestResult = runRandomExcursionsTestResponse?.result ;

  const RandomExVarTestPValue = runRandomExcursionsVariantTestResponse?.p_value ;
  const RandomExVarTestResult = runRandomExcursionsVariantTestResponse?.result ;


  const BSTestPValue = runBinarySpacingsTestResponse?.p_value ;
  const BSTestResult = runBinarySpacingsTestResponse?.result ;


  const OverPermTestPValue = runOverlapping5PermutationTestResponse.p_value ;
  const OverPermTestResult = runOverlapping5PermutationTestResponse?.result ;

  const Rank31TestPValue = run31MatrixTestResponse?.p_value ;
  const Rank31TestResult = run31MatrixTestResponse?.result ;

  const Rank32TestPValue = run32MatrixTestResponse?.p_value ;
  const Rank32TestResult = run32MatrixTestResponse?.result ;
  
  const BitstreamTestPValue = runBitstreamTestResponse?.p_value ;
  const BitstreamTestResult = runBitstreamTestResponse?.result ;
  
  const OPSOPValue = runopsoTestResponse?.p_value ;
  const OPSOTestResult = runopsoTestResponse?.result ;
  
  const DNATestPValue = rundnaTestResponse?.p_value ;
  const DNATestResult = rundnaTestResponse?.result ;
  
  const OneStreamTestPValue = runoneStreamTestResponse?.p_value ;
  const OneStreamTestResult = runoneStreamTestResponse?.result ;
  
  const OneByteTestPValue = runoneByteTestResponse?.p_value ;
  const OneByteTestResult = runoneByteTestResponse?.result ;
  
  const ParkTestPValue = runParkingLotTestResponse?.p_value ;
  const ParkTestResult = runParkingLotTestResponse?.result ;
  
  const MinDisTestPValue = runMinimumDistanceTestResponse?.p_value ;
  const MinDisTestResult = runMinimumDistanceTestResponse?.result ;
  
  const SpheresTestPValue = runSpeheresTestResponse?.p_value ;
  const SpheresTestResult = runSpeheresTestResponse?.result ;
  
  const CrapsTestPValue = runCrapsTestResponse?.p_value ;
  const CrapsTestResult = runCrapsTestResponse?.result ;
  
  const GcdTestPValue = rungcdTestResponse?.p_value ;
  const GcdTestResult = rungcdTestResponse?.result ;
  
  const SimpleGcdTestPValue = rungcdSimpleTestResponse?.p_value ;
  const SimpleGcdTestResult = rungcdSimpleTestResponse?.result ;
  
  const GenMinDisTestPValue = rungeneralisedMinimumTestResponse?.p_value ;
  const GenMinDisTestResult = rungeneralisedMinimumTestResponse?.result ;
  
  const LCTestPValue = runu01LinearComplexityTestResponse?.p_value ;
  const LCTestResult = runu01LinearComplexityTestResponse?.result ;
  
  const RepSubTestPValue = runu01LongestSubstringTestResponse?.p_value ;
  const RepSubTestResult = runu01LongestSubstringTestResponse?.result ;
  
  const MatrixRankTestPValue = runmatrixRankTestResponse?.p_value ;
  const MatrixRankTestResult = runmatrixRankTestResponse?.result ;
  
  const OQSOTestPValue = runoqsoTestResponse?.p_value ;
  const OQSOTestResult = runoqsoTestResponse?.result ;
  

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

  return (
    <Box m="20px">
      <Header title="Enter Server Link" />

{/* URL Input Box */}
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

{/* Display Fetched Binary Number */}
<Box mt="20px" textAlign="center">
  <Typography
    variant="h5"
    style={{
      color: colors.greenAccent[500],
      backgroundColor: colors.primary[400],
      padding: "10px",
      borderRadius: 8,
    }}
  >
    Binary Number: {binaryInput || "No Data Fetched"}
  </Typography>
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

            <tr>
              <td>21</td>
              <td>Frequency Test</td>
              <td>{frequencyTestPValue}</td>
              <td>{frequencyTestResult}</td>
            </tr>

            <tr>
              <td>22</td>
              <td>Frequency Test (within a block)</td>
              <td>{frequencyTestBlockPValue}</td>
              <td>{frequencyTestBlockResult}</td>
            </tr>

            <tr>
              <td>23</td>
              <td>Runs Test</td>
              <td>{RunsTestPValue}</td>
              <td>{RunsTestResult}</td>
            </tr>

            <tr>
              <td>24</td>
              <td>Approximate Entorpy Test</td>
              <td>{AppEntropyTestPValue}</td>
              <td>{AppEntropyTestResult}</td>
            </tr>

            <tr>
              <td>25</td>
              <td>Linear Complexity Test</td>
              <td>{LiCTestPValue}</td>
              <td>{LiCTestResult}</td>
            </tr>

            <tr>
              <td>26</td>
              <td>Binary Matrix Rank Test</td>
              <td>{BMTestPValue}</td>
              <td>{BMTestResult}</td>
            </tr>

            <tr>
              <td>27</td>
              <td>Non overlapping Template MatchingTest</td>
              <td>{NonOverTestPValue}</td>
              <td>{NonOverTestResult}</td>
            </tr>

            <tr>
              <td>28</td>
              <td>Maurer's Universal Statistical Test</td>
              <td>{MaurerTestPValue}</td>
              <td>{MaurerTestResult}</td>
            </tr>

            <tr>
              <td>29</td>
              <td>Serial Test</td>
              <td>{SerialTestPValue}</td>
              <td>{SerialTestResult}</td>
            </tr>

           
            <tr>
              <td>30</td>
              <td>Cumulative Sums Test</td>
              <td>{CusumTestPValue}</td>
              <td>{CusumTestResult}</td>
            </tr>

            <tr>
              <td>31</td>
              <td>Autocorrelation Test</td>
              <td>{AutocorTestPValue}</td>
              <td>{AutocorTestResult}</td>
            </tr>

            <tr>
              <td>32</td>
              <td>Adaptive Statistical Test</td>
              <td>{AdaptStatTestPValue}</td>
              <td>{AdaptStatTestResult}</td>
            </tr>

            <tr>
              <td>33</td>
              <td>Longest Run of Ones Test</td>
              <td>{LongRunOneTestPValue}</td>
              <td>{LongRunOneTestResult}</td>
            </tr>

            <tr>
              <td>34</td>
              <td>Discrete Fourier Transform Test</td>
              <td>{DFTTestPValue}</td>
              <td>{DFTTestResult}</td>
            </tr>

            <tr>
              <td>35</td>
              <td>Overlapping Template Matching Test</td>
              <td>{OverTestPValue}</td>
              <td>{OverTestResult}</td>
            </tr>

            <tr>
              <td>36</td>
              <td>Random Excursion Test</td>
              <td>{RandomExTestPValue}</td>
              <td>{RandomExTestResult}</td>
            </tr>

            
            <tr>
              <td>37</td>
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
