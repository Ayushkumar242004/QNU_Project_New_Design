import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState, useEffect, useRef } from "react";
import axios from "axios"; // Make sure axios is imported
import CircularProgress from '@mui/material/CircularProgress';
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";


const MAX_STACK_SIZE_ESTIMATE = 1 * 1024 * 1024;

const Nist_tests = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [binaryInput, setBinaryInput] = useState("");
  const [binaryInput2, setBinaryInput2] = useState("");
  const [binaryInput3, setBinaryInput3] = useState("");
  const [binaryInput4, setBinaryInput4] = useState("");
  const [binaryInput5, setBinaryInput5] = useState("");
  const [binaryInput6, setBinaryInput6] = useState("");
  const [binaryInput7, setBinaryInput7] = useState("");
  const [binaryInput8, setBinaryInput8] = useState("");
  const [binaryInput9, setBinaryInput9] = useState("");
  const [binaryInput10, setBinaryInput10] = useState("");

  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const fileInputRef4 = useRef(null);
  const fileInputRef5 = useRef(null);
  const fileInputRef6 = useRef(null);
  const fileInputRef7 = useRef(null);
  const fileInputRef8 = useRef(null);
  const fileInputRef_nine = useRef(null);
  const fileInputRef10 = useRef(null);


  const [result, setResult] = useState(null);
  const [result2, setResult2] = useState(null);
  const [result3, setResult3] = useState(null);
  const [result4, setResult4] = useState(null);
  const [result5, setResult5] = useState(null);
  const [result6, setResult6] = useState(null);
  const [result7, setResult7] = useState(null);
  const [result8, setResult8] = useState(null);
  const [result9, setResult9] = useState(null);
  const [result10, setResult10] = useState(null);

  const [uploadTime, setUploadTime] = useState("");
  const [uploadTime2, setUploadTime2] = useState("");
  const [uploadTime3, setUploadTime3] = useState("");
  const [uploadTime4, setUploadTime4] = useState("");
  const [uploadTime5, setUploadTime5] = useState("");
  const [uploadTime6, setUploadTime6] = useState("");
  const [uploadTime7, setUploadTime7] = useState("");
  const [uploadTime8, setUploadTime8] = useState("");
  const [uploadTime9, setUploadTime9] = useState("");
  const [uploadTime10, setUploadTime10] = useState("");

  const [fileName, setFileName] = useState(""); // New state to store filename
  const [fileName2, setFileName2] = useState(""); // New state to store filename
  const [fileName3, setFileName3] = useState(""); // New state to store filename
  const [fileName4, setFileName4] = useState(""); // New state to store filename
  const [fileName5, setFileName5] = useState(""); // New state to store filename
  const [fileName6, setFileName6] = useState(""); // New state to store filename
  const [fileName7, setFileName7] = useState(""); // New state to store filename
  const [fileName8, setFileName8] = useState(""); // New state to store filename
  const [fileName9, setFileName9] = useState(""); // New state to store filename
  const [fileName10, setFileName10] = useState(""); // New state to store filename

  const [scheduledTime, setScheduledTime] = useState("");
  const [debouncedScheduledTime, setDebouncedScheduledTime] = useState("");


  const [scheduledTime2, setScheduledTime2] = useState("");
  const [debouncedScheduledTime2, setDebouncedScheduledTime2] = useState("");


  const [scheduledTime3, setScheduledTime3] = useState("");
  const [debouncedScheduledTime3, setDebouncedScheduledTime3] = useState("");


  const [scheduledTime4, setScheduledTime4] = useState("");
  const [debouncedScheduledTime4, setDebouncedScheduledTime4] = useState("");


  const [scheduledTime5, setScheduledTime5] = useState("");
  const [debouncedScheduledTime5, setDebouncedScheduledTime5] = useState("");


  const [scheduledTime6, setScheduledTime6] = useState("");
  const [debouncedScheduledTime6, setDebouncedScheduledTime6] = useState("");


  const [scheduledTime7, setScheduledTime7] = useState("");
  const [debouncedScheduledTime7, setDebouncedScheduledTime7] = useState("");


  const [scheduledTime8, setScheduledTime8] = useState("");
  const [debouncedScheduledTime8, setDebouncedScheduledTime8] = useState("");

  const [scheduledTime9, setScheduledTime9] = useState("");
  const [debouncedScheduledTime9, setDebouncedScheduledTime9] = useState("");


  const [scheduledTime10, setScheduledTime10] = useState("");
  const [debouncedScheduledTime10, setDebouncedScheduledTime10] = useState("");





  const finalResult = result ? result.final_result : " ";

  const handleScheduledTimeChange = (event) => {
    setScheduledTime(event.target.value);
    console.log(scheduledTime);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedScheduledTime(scheduledTime);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [scheduledTime]);


  const finalResult2 = result2 ? result2.final_result : " ";

  const handleScheduledTimeChange2 = (event) => {
    setScheduledTime2(event.target.value);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedScheduledTime2(scheduledTime2);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [scheduledTime2]);


  const finalResult3 = result3 ? result3.final_result : " ";

  const handleScheduledTimeChange3 = (event) => {
    setScheduledTime3(event.target.value);
    console.log(scheduledTime3);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedScheduledTime3(scheduledTime3);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [scheduledTime3]);


  const finalResult4 = result4 ? result4.final_result : " ";

  const handleScheduledTimeChange4 = (event) => {
    setScheduledTime4(event.target.value);
    console.log(scheduledTime4);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedScheduledTime4(scheduledTime4);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [scheduledTime4]);


  const finalResult5 = result5 ? result5.final_result : " ";

  const handleScheduledTimeChange5 = (event) => {
    setScheduledTime5(event.target.value);
    console.log(scheduledTime5);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedScheduledTime5(scheduledTime5);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [scheduledTime5]);


  const finalResult6 = result6 ? result6.final_result : " ";

  const handleScheduledTimeChange6 = (event) => {
    setScheduledTime6(event.target.value);
    console.log(scheduledTime6);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedScheduledTime6(scheduledTime6);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [scheduledTime6]);


  const finalResult7 = result7 ? result7.final_result : " ";

  const handleScheduledTimeChange7 = (event) => {
    setScheduledTime7(event.target.value);
    console.log(scheduledTime7);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedScheduledTime7(scheduledTime7);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [scheduledTime7]);


  const finalResult8 = result8 ? result8.final_result : " ";

  const handleScheduledTimeChange8 = (event) => {
    setScheduledTime8(event.target.value);
    console.log(scheduledTime8);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedScheduledTime8(scheduledTime8);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [scheduledTime8]);


  const finalResult9 = result9 ? result9.final_result : " ";

  const handleScheduledTimeChange9 = (event) => {
    setScheduledTime9(event.target.value);
    console.log(scheduledTime9);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedScheduledTime9(scheduledTime9);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [scheduledTime9]);


  const finalResult10 = result10 ? result10.final_result : " ";

  const handleScheduledTimeChange10 = (event) => {
    setScheduledTime10(event.target.value);
    console.log(scheduledTime10);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedScheduledTime10(scheduledTime10);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [scheduledTime10]);



  // Handle file upload
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };
  const handleFileUpload2 = () => {
    fileInputRef2.current.click();
  };
  const handleFileUpload3 = () => {
    fileInputRef3.current.click();
  };
  const handleFileUpload4 = () => {
    fileInputRef4.current.click();
  };
  const handleFileUpload5 = () => {
    fileInputRef5.current.click();
  };
  const handleFileUpload6 = () => {
    fileInputRef6.current.click();
  };
  const handleFileUpload7 = () => {
    fileInputRef7.current.click();
  };
  const handleFileUpload8 = () => {
    fileInputRef8.current.click();
  };
  const handleFileUpload9 = () => {
    fileInputRef_nine.current.click();
  };
  const handleFileUpload10 = () => {
    fileInputRef10.current.click();
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
      setBinaryInput(textData);

      // Store the current time when the file is uploaded
      const currentTime = new Date().toLocaleTimeString();
      setUploadTime(currentTime); // Update the state with the current time

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange2 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

    if (selectedFile.size > MAX_STACK_SIZE_ESTIMATE) {
      alert("Warning: The selected file is too large. Please choose a smaller file.");
      return;
    }
    setFileName2(selectedFile.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput2(textData);

      const currentTime = new Date().toLocaleTimeString();
      setUploadTime2(currentTime);
      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange3 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

    if (selectedFile.size > MAX_STACK_SIZE_ESTIMATE) {
      alert("Warning: The selected file is too large. Please choose a smaller file.");
      return;
    }
    setFileName3(selectedFile.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput3(textData);

      const currentTime = new Date().toLocaleTimeString();
      setUploadTime3(currentTime);
      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange4 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected
    setFileName4(selectedFile.name);
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

      // Update binaryInput state with new binary data
      setBinaryInput4(textData);

      const currentTime = new Date().toLocaleTimeString();
      setUploadTime4(currentTime);
      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange5 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

    if (selectedFile.size > MAX_STACK_SIZE_ESTIMATE) {
      alert("Warning: The selected file is too large. Please choose a smaller file.");
      return;
    }
    setFileName5(selectedFile.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput5(textData);

      const currentTime = new Date().toLocaleTimeString();
      setUploadTime5(currentTime);
      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange6 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

    if (selectedFile.size > MAX_STACK_SIZE_ESTIMATE) {
      alert("Warning: The selected file is too large. Please choose a smaller file.");
      return;
    }
    setFileName6(selectedFile.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput6(textData);

      const currentTime = new Date().toLocaleTimeString();
      setUploadTime6(currentTime);
      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange7 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

    if (selectedFile.size > MAX_STACK_SIZE_ESTIMATE) {
      alert("Warning: The selected file is too large. Please choose a smaller file.");
      return;
    }
    setFileName7(selectedFile.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput7(textData);

      const currentTime = new Date().toLocaleTimeString();
      setUploadTime7(currentTime);
      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange8 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

    if (selectedFile.size > MAX_STACK_SIZE_ESTIMATE) {
      alert("Warning: The selected file is too large. Please choose a smaller file.");
      return;
    }
    setFileName8(selectedFile.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput8(textData);

      const currentTime = new Date().toLocaleTimeString();
      setUploadTime8(currentTime);
      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange9 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

    if (selectedFile.size > MAX_STACK_SIZE_ESTIMATE) {
      alert("Warning: The selected file is too large. Please choose a smaller file.");
      return;
    }
    setFileName9(selectedFile.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput9(textData);

      const currentTime = new Date().toLocaleTimeString();
      setUploadTime9(currentTime);
      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange10 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

    if (selectedFile.size > MAX_STACK_SIZE_ESTIMATE) {
      alert("Warning: The selected file is too large. Please choose a smaller file.");
      return;
    }
    setFileName10(selectedFile.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput10(textData);

      const currentTime = new Date().toLocaleTimeString();
      setUploadTime10(currentTime);
      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingProgress2, setLoadingProgress2] = useState(0);
  const [loadingProgress3, setLoadingProgress3] = useState(0);
  const [loadingProgress4, setLoadingProgress4] = useState(0);
  const [loadingProgress5, setLoadingProgress5] = useState(0);
  const [loadingProgress6, setLoadingProgress6] = useState(0);
  const [loadingProgress7, setLoadingProgress7] = useState(0);
  const [loadingProgress8, setLoadingProgress8] = useState(0);
  const [loadingProgress9, setLoadingProgress9] = useState(0);
  const [loadingProgress10, setLoadingProgress10] = useState(0);


  useEffect(() => {
    if (!binaryInput || !debouncedScheduledTime) return;// Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress(0); // Start loading from 0%

      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); // Increment progress every 500ms until 90%
        console.log("sent");
        const response = await axios.post("http://localhost:8000/generate_final_ans/", {
          binary_data: binaryInput,
          scheduled_time: debouncedScheduledTime,
        });

        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress(100); // Set progress to 100% after response is received
        setResult(response.data); // Set the result data
      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress(0); // Reset progress in case of failure
      }
    };

    fetchResult();
  }, [binaryInput, debouncedScheduledTime]);


  useEffect(() => {
    if (!binaryInput2 || !debouncedScheduledTime2) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress2(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress2((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); // Increment progress every 500ms until 90%

        const response = await axios.post("http://localhost:8000/generate_final_ans/", {
          binary_data: binaryInput2,
          scheduled_time: debouncedScheduledTime2,
        });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress2(100);
        setResult2(response.data); // Set the response data
      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress2(0);
      }
    };

    fetchResult();
  }, [binaryInput2, debouncedScheduledTime2]);

  useEffect(() => {
    if (!binaryInput3 || !debouncedScheduledTime3) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress3(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress3((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); // Increment progress every 500ms until 90%

        const response = await axios.post("http://localhost:8000/generate_final_ans/", {
          binary_data: binaryInput3,
          scheduled_time: debouncedScheduledTime3,
        });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress3(100);
        setResult3(response.data); // Set the response data
      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress3(0);
      }
    };

    fetchResult();
  }, [binaryInput3, debouncedScheduledTime3]);

  useEffect(() => {
    if (!binaryInput4 || !debouncedScheduledTime4) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress4(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress4((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); // Increment progress every 500ms until 90%

        const response = await axios.post("http://localhost:8000/generate_final_ans/", {
          binary_data: binaryInput4,
          scheduled_time: debouncedScheduledTime4,
        });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress4(100);
        setResult4(response.data); // Set the response data
      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress4(0);
      }
    };

    fetchResult();
  }, [binaryInput4, debouncedScheduledTime4]);

  useEffect(() => {
    if (!binaryInput5 || !debouncedScheduledTime5) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress5(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress5((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); // Increment progress every 500ms until 90%

        const response = await axios.post("http://localhost:8000/generate_final_ans/", {
          binary_data: binaryInput5,
          scheduled_time: debouncedScheduledTime5,
        });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress5(100);
        setResult5(response.data); // Set the response data
      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress5(0);
      }
    };

    fetchResult();
  }, [binaryInput5, debouncedScheduledTime5]);


  useEffect(() => {
    if (!binaryInput6 || !debouncedScheduledTime6) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress6(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress6((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); // Increment progress every 500ms until 90%

        const response = await axios.post("http://localhost:8000/generate_final_ans/", {
          binary_data: binaryInput6,
          scheduled_time: debouncedScheduledTime6,
        });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress6(100);
        setResult6(response.data); // Set the response data
      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress6(0);
      }
    };

    fetchResult();
  }, [binaryInput6, debouncedScheduledTime6]);

  useEffect(() => {
    if (!binaryInput7 || !debouncedScheduledTime7) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress7(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress7((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); // Increment progress every 500ms until 90%

        const response = await axios.post("http://localhost:8000/generate_final_ans/", {
          binary_data: binaryInput7,
          scheduled_time: debouncedScheduledTime7,
        });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress7(100);
        setResult7(response.data); // Set the response data
      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress7(0);
      }
    };

    fetchResult();
  }, [binaryInput7, debouncedScheduledTime7]);


  useEffect(() => {
    if (!binaryInput8 || !debouncedScheduledTime8) return; // Do not fetch if binaryInput is empty
    setLoadingProgress8(0);
    const fetchResult = async () => {
      setLoadingProgress8(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress8((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); // Increment progress every 500ms until 90%

        const response = await axios.post("http://localhost:8000/generate_final_ans/", {
          binary_data: binaryInput8,
          scheduled_time: debouncedScheduledTime8,
        });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress8(100);
        setResult8(response.data); // Set the response data
      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress8(0);
      }
    };

    fetchResult();
  }, [binaryInput8, debouncedScheduledTime8]);

  useEffect(() => {
    if (!binaryInput9 || !debouncedScheduledTime9) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress9(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress9((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); // Increment progress every 500ms until 90%

        const response = await axios.post("http://localhost:8000/generate_final_ans/", {
          binary_data: binaryInput9,
          scheduled_time: debouncedScheduledTime9,
        });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress9(100);
        setResult9(response.data); // Set the response data
      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress9(0);
      }
    };

    fetchResult();
  }, [binaryInput9, debouncedScheduledTime9]);

  useEffect(() => {
    if (!binaryInput10 || !debouncedScheduledTime10) return; // Do not fetch if binaryInput is empty
    setLoadingProgress10(0);
    const fetchResult = async () => {
      setLoadingProgress10(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress10((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); // Increment progress every 500ms until 90%

        const response = await axios.post("http://localhost:8000/generate_final_ans/", {
          binary_data: binaryInput10,
          scheduled_time: debouncedScheduledTime10,
        });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress10(100);
        setResult10(response.data); // Set the response data
      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress10(0);
      }
    };

    fetchResult();
  }, [binaryInput10, debouncedScheduledTime10]);



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

  const handleButtonClick2 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report/", {
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
      fetch("http://localhost:8000/pdf-report/", {
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
      fetch("http://localhost:8000/pdf-report/", {
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
      fetch("http://localhost:8000/pdf-report/", {
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


  const handleButtonClick6 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput6 }),
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
        body: JSON.stringify({ binary_data: binaryInput6 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick7 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput7 }),
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
        body: JSON.stringify({ binary_data: binaryInput7 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick8 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput8 }),
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
        body: JSON.stringify({ binary_data: binaryInput8 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick9 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput9 }),
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
        body: JSON.stringify({ binary_data: binaryInput9 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick10 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput10 }),
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
        body: JSON.stringify({ binary_data: binaryInput10 }),
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
              <th style={{ width: "10%" }}>Serial No</th>
              <th style={{ width: "30%" }}>Upload File</th>
              <th style={{ width: "10%" }}>Result</th>
              <th style={{ width: "10%" }}>Progress Bar</th>
              <th style={{ width: "10%" }}>Uploading Time</th>
              <th style={{ width: "10%" }}>Filename</th>
              <th style={{ width: "20%" }}>Scheduling Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
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
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick("graph")}
                      sx={{
                        backgroundColor: colors.blueAccent[400],
                        color: colors.grey[100],
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: colors.blueAccent[500],
                        },
                      }}
                    >
                      Generate Graph
                    </Button>
                    <Box display="flex" alignItems="center" gap="10px">
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick("report")}
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
              {/* <td>{result}</td> */}
              <td>{finalResult}</td>
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
                    value={loadingProgress} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress}%
                  </Typography>
                </Box>
              </td>


              <td>{uploadTime || ""}</td>
              <td>{fileName || "No file selected"}</td>
              <td>
                <TextField
                  value={scheduledTime}
                  onChange={handleScheduledTimeChange}
                  placeholder="Enter scheduled time"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: {
                      textAlign: 'center',
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-input': {
                      textAlign: 'center',
                    },
                  }}
                />
              </td>


            </tr>

            <tr>
              <td>2</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload2}
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
                      ref={fileInputRef2}
                      style={{ display: "none" }}
                      onChange={handleFileChange2}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick2("graph")}
                      sx={{
                        backgroundColor: colors.blueAccent[400],
                        color: colors.grey[100],
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: colors.blueAccent[500],
                        },
                      }}
                    >
                      Generate Graph
                    </Button>
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
              <td>{finalResult2}</td>
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
              <td>{uploadTime2 || ""}</td>
              <td>{fileName2 || "No file selected"}</td>

              <td>
                <TextField
                  value={scheduledTime2}
                  onChange={handleScheduledTimeChange2}
                  placeholder="Enter scheduled time"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: {
                      textAlign: 'center',
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-input': {
                      textAlign: 'center',
                    },
                  }}
                />
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload3}
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
                      ref={fileInputRef3}
                      style={{ display: "none" }}
                      onChange={handleFileChange3}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick3("graph")}
                      sx={{
                        backgroundColor: colors.blueAccent[400],
                        color: colors.grey[100],
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: colors.blueAccent[500],
                        },
                      }}
                    >
                      Generate Graph
                    </Button>
                    <Box display="flex" alignItems="center" gap="10px">
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick3("report")}
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
              <td>{finalResult3}</td>
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
                    value={loadingProgress3} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress3}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime3 || ""}</td>
              <td>{fileName3 || "No file selected"}</td>
              <td>
                <TextField
                  value={scheduledTime3}
                  onChange={handleScheduledTimeChange3}
                  placeholder="Enter scheduled time"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: {
                      textAlign: 'center',
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-input': {
                      textAlign: 'center',
                    },
                  }}
                />
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload4}
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
                      ref={fileInputRef4}
                      style={{ display: "none" }}
                      onChange={handleFileChange4}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick4("graph")}
                      sx={{
                        backgroundColor: colors.blueAccent[400],
                        color: colors.grey[100],
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: colors.blueAccent[500],
                        },
                      }}
                    >
                      Generate Graph
                    </Button>
                    <Box display="flex" alignItems="center" gap="10px">
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick4("report")}
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
              <td>{finalResult4}</td>
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
                    value={loadingProgress4} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress4}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime4 || ""}</td>
              <td>{fileName4 || "No file selected"}</td>
              <td>
                <TextField
                  value={scheduledTime4}
                  onChange={handleScheduledTimeChange4}
                  placeholder="Enter scheduled time"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: {
                      textAlign: 'center',
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-input': {
                      textAlign: 'center',
                    },
                  }}
                />
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload5}
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
                      ref={fileInputRef5}
                      style={{ display: "none" }}
                      onChange={handleFileChange5}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick5("graph")}
                      sx={{
                        backgroundColor: colors.blueAccent[400],
                        color: colors.grey[100],
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: colors.blueAccent[500],
                        },
                      }}
                    >
                      Generate Graph
                    </Button>
                    <Box display="flex" alignItems="center" gap="10px">
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick5("report")}
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
              <td>{finalResult5}</td>
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
                    value={loadingProgress5} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress5}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime5 || ""}</td>
              <td>{fileName5 || "No file selected"}</td>
              <td>
                <TextField
                  value={scheduledTime5}
                  onChange={handleScheduledTimeChange5}
                  placeholder="Enter scheduled time"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: {
                      textAlign: 'center',
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-input': {
                      textAlign: 'center',
                    },
                  }}
                />
              </td>
              {/* <td>{binaryInput}</td> */}
            </tr>

            <tr>
              <td>6</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload6}
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
                      ref={fileInputRef6}
                      style={{ display: "none" }}
                      onChange={handleFileChange6}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick6("graph")}
                      sx={{
                        backgroundColor: colors.blueAccent[400],
                        color: colors.grey[100],
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: colors.blueAccent[500],
                        },
                      }}
                    >
                      Generate Graph
                    </Button>
                    <Box display="flex" alignItems="center" gap="10px">
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick6("report")}
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
              <td>{finalResult6}</td>
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
                    value={loadingProgress6} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress6}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime6 || ""}</td>
              <td>{fileName6 || "No file selected"}</td>
              <td>
                <TextField
                  value={scheduledTime6}
                  onChange={handleScheduledTimeChange6}
                  placeholder="Enter scheduled time"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: {
                      textAlign: 'center',
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-input': {
                      textAlign: 'center',
                    },
                  }}
                />
              </td>
            </tr>

            <tr>
              <td>7</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload7}
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
                      ref={fileInputRef7}
                      style={{ display: "none" }}
                      onChange={handleFileChange7}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick7("graph")}
                      sx={{
                        backgroundColor: colors.blueAccent[400],
                        color: colors.grey[100],
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: colors.blueAccent[500],
                        },
                      }}
                    >
                      Generate Graph
                    </Button>
                    <Box display="flex" alignItems="center" gap="10px">
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick7("report")}
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
              <td>{finalResult7}</td>
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
                    value={loadingProgress7} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress7}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime7 || ""}</td>
              <td>{fileName7 || "No file selected"}</td>
              <td>
                <TextField
                  value={scheduledTime7}
                  onChange={handleScheduledTimeChange7}
                  placeholder="Enter scheduled time"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: {
                      textAlign: 'center',
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-input': {
                      textAlign: 'center',
                    },
                  }}
                />
              </td>
            </tr>

            <tr>
              <td>8</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload8}
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
                      ref={fileInputRef8}
                      style={{ display: "none" }}
                      onChange={handleFileChange8}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick8("graph")}
                      sx={{
                        backgroundColor: colors.blueAccent[400],
                        color: colors.grey[100],
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: colors.blueAccent[500],
                        },
                      }}
                    >
                      Generate Graph
                    </Button>
                    <Box display="flex" alignItems="center" gap="10px">
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick8("report")}
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
              <td>{finalResult8}</td>
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
                    value={loadingProgress8} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress8}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime8 || ""}</td>
              <td>{fileName8 || "No file selected"}</td>
              <td>
                <TextField
                  value={scheduledTime8}
                  onChange={handleScheduledTimeChange8}
                  placeholder="Enter scheduled time"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: {
                      textAlign: 'center',
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-input': {
                      textAlign: 'center',
                    },
                  }}
                />
              </td>
            </tr>

            <tr>
              <td>9</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload9}
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
                      ref={fileInputRef_nine}
                      style={{ display: "none" }}
                      onChange={handleFileChange9}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick9("graph")}
                      sx={{
                        backgroundColor: colors.blueAccent[400],
                        color: colors.grey[100],
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: colors.blueAccent[500],
                        },
                      }}
                    >
                      Generate Graph
                    </Button>
                    <Box display="flex" alignItems="center" gap="10px">
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick9("report")}
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
              <td>{finalResult9}</td>
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
                    value={loadingProgress9} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress9}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime9 || ""}</td>
              <td>{fileName9 || "No file selected"}</td>
              <td>
                <TextField
                  value={scheduledTime9}
                  onChange={handleScheduledTimeChange9}
                  placeholder="Enter scheduled time"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: {
                      textAlign: 'center',
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-input': {
                      textAlign: 'center',
                    },
                  }}
                />
              </td>
            </tr>

            <tr>
              <td>10</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload10}
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
                      ref={fileInputRef10}
                      style={{ display: "none" }}
                      onChange={handleFileChange10}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick10("graph")}
                      sx={{
                        backgroundColor: colors.blueAccent[400],
                        color: colors.grey[100],
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: colors.blueAccent[500],
                        },
                      }}
                    >
                      Generate Graph
                    </Button>
                    <Box display="flex" alignItems="center" gap="10px">
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick10("report")}
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
              <td>{finalResult10}</td>
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
                    value={loadingProgress10} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress10}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime10 || ""}</td>
              <td>{fileName10 || "No file selected"}</td>
              <td>
                <TextField
                  value={scheduledTime10}
                  onChange={handleScheduledTimeChange10}
                  placeholder="Enter scheduled time"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: {
                      textAlign: 'center',
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-input': {
                      textAlign: 'center',
                    },
                  }}
                />
              </td>
            </tr>

          </tbody>
        </Box>


      </Box>
      <Header title="AI Analysis" />
      <Box
        sx={{
          background: "linear-gradient(135deg, #1F2A40 30%, #29314F 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "250px",
          textAlign: "center",
          borderRadius: "12px",
          mt: 4,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating AI Elements for Design */}
        <AutoAwesomeIcon
          sx={{
            position: "absolute",
            top: 20,
            left: 30,
            fontSize: 40,
            color: "rgba(255, 255, 255, 0.3)",
          }}
        />
        <AutoAwesomeIcon
          sx={{
            position: "absolute",
            bottom: 20,
            right: 30,
            fontSize: 40,
            color: "rgba(255, 255, 255, 0.3)",
          }}
        />

        {/* Gemini Logo */}
        <Box
          component="img"
          src="/image.png"
          alt="Gemini Logo"
          sx={{ width: 80, height: "auto", mb: 2, borderRadius: "12px" }}
        />

        {/* Title */}


        {/* Button */}
        <Button
          variant="contained"
          onClick={() => {
            window.open("http://localhost:3000/report", "_blank");

          }}
          sx={{
            backgroundColor: "#E63946", // Red theme
            color: "white",
            textTransform: "none",
            padding: "15px 40px",
            fontSize: "1.5rem",
            width: "50%",
            maxWidth: "320px",
            borderRadius: "8px",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#F77F00",
              transform: "scale(1.05)",
              boxShadow: "0px 4px 10px rgba(255, 99, 71, 0.5)", // Glow effect
            },
          }}
        >
          Analyze with AI
        </Button>
      </Box>

    </Box>
  );
};

export default Nist_tests;
