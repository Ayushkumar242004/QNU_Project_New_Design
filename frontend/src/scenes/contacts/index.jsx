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
  const [binaryInput2, setBinaryInput2] = useState("");
  const [binaryInput3, setBinaryInput3] = useState("");
  const [binaryInput4, setBinaryInput4] = useState("");
  const [binaryInput5, setBinaryInput5] = useState("");
  const [binaryInput6, setBinaryInput6] = useState("");
  const [binaryInput7, setBinaryInput7] = useState("");
  const [binaryInput8, setBinaryInput8] = useState("");
  const [binaryInput9, setBinaryInput9] = useState("");
  const [binaryInput10, setBinaryInput10] = useState("");
  const [binaryInput11, setBinaryInput11] = useState("");
  const [binaryInput12, setBinaryInput12] = useState("");
  const [binaryInput13, setBinaryInput13] = useState("");
  const [binaryInput14, setBinaryInput14] = useState("");
  const [binaryInput15, setBinaryInput15] = useState("");
  const [binaryInput16, setBinaryInput16] = useState("");
  const [binaryInput17, setBinaryInput17] = useState("");
  const [binaryInput18, setBinaryInput18] = useState("");
  const [binaryInput19, setBinaryInput19] = useState("");
  const [binaryInput20, setBinaryInput20] = useState("");

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
  const fileInputRef11 = useRef(null);
  const fileInputRef12 = useRef(null);
  const fileInputRef13 = useRef(null);
  const fileInputRef14 = useRef(null);
  const fileInputRef15 = useRef(null);
  const fileInputRef16 = useRef(null);
  const fileInputRef17 = useRef(null);
  const fileInputRef18 = useRef(null);
  const fileInputRef19 = useRef(null);
  const fileInputRef20 = useRef(null);

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
  const [result11, setResult11] = useState(null);
  const [result12, setResult12] = useState(null);
  const [result13, setResult13] = useState(null);
  const [result14, setResult14] = useState(null);
  const [result15, setResult15] = useState(null);
  const [result16, setResult16] = useState(null);
  const [result17, setResult17] = useState(null);
  const [result18, setResult18] = useState(null);
  const [result19, setResult19] = useState(null);
  const [result20, setResult20] = useState(null);





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
  const handleFileUpload11 = () => {
    fileInputRef11.current.click();
  };
  const handleFileUpload12 = () => {
    fileInputRef12.current.click();
  };
  const handleFileUpload13 = () => {
    fileInputRef13.current.click();
  };
  const handleFileUpload14 = () => {
    fileInputRef14.current.click();
  };
  const handleFileUpload15 = () => {
    fileInputRef15.current.click();
  };
  const handleFileUpload16 = () => {
    fileInputRef16.current.click();
  };
  const handleFileUpload17 = () => {
    fileInputRef17.current.click();
  };
  const handleFileUpload18 = () => {
    fileInputRef18.current.click();
  };
  const handleFileUpload19 = () => {
    fileInputRef19.current.click();
  };
  const handleFileUpload20 = () => {
    fileInputRef20.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

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
      setBinaryInput(textData);

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

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput2(textData);

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

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput3(textData);

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange4 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

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

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput5(textData);

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

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput6(textData);

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

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput7(textData);

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

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput8(textData);

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

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput9(textData);

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

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput10(textData);

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange11 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

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
      setBinaryInput11(textData);

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange12 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

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
      setBinaryInput12(textData);

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange13 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

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
      setBinaryInput13(textData);

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange14 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

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
      setBinaryInput14(textData);

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange15 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

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
      setBinaryInput15(textData);

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange16 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

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
      setBinaryInput16(textData);

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange17 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

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
      setBinaryInput17(textData);

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange18 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

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
      setBinaryInput18(textData);

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange19 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

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
      setBinaryInput19(textData);

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleFileChange20 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

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
      setBinaryInput20(textData);

      // Reset the file input value to allow the same file to be uploaded again
      event.target.value = "";
    };
    reader.readAsArrayBuffer(selectedFile);
  };


  useEffect(() => {
    if (!binaryInput) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput });
        setResult(response.data); // Set the response data

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
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput2 });
        setResult2(response.data); // Set the response data

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
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput3 });
        setResult3(response.data); // Set the response data

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
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput4 });
        setResult4(response.data); // Set the response data

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
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput5 });
        setResult5(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput5]);

  useEffect(() => {
    if (!binaryInput6) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput6 });
        setResult6(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput6]);

  useEffect(() => {
    if (!binaryInput7) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput7 });
        setResult7(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput7]);

  useEffect(() => {
    if (!binaryInput8) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput8 });
        setResult8(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput8]);

  useEffect(() => {
    if (!binaryInput9) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput9 });
        setResult9(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput9]);

  useEffect(() => {
    if (!binaryInput10) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput10 });
        setResult10(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput10]);

  useEffect(() => {
    if (!binaryInput11) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput11 });
        setResult11(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput11]);

  useEffect(() => {
    if (!binaryInput12) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput12 });
        setResult12(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput12]);

  useEffect(() => {
    if (!binaryInput13) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput13 });
        setResult13(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput13]);

  useEffect(() => {
    if (!binaryInput14) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput14 });
        setResult14(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput14]);

  useEffect(() => {
    if (!binaryInput15) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput15 });
        setResult15(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput15]);

  useEffect(() => {
    if (!binaryInput16) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput16 });
        setResult16(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput16]);

  useEffect(() => {
    if (!binaryInput17) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput17 });
        setResult17(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput17]);

  useEffect(() => {
    if (!binaryInput18) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput18 });
        setResult18(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput18]);

  useEffect(() => {
    if (!binaryInput19) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput19 });
        setResult19(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput19]);

  useEffect(() => {
    if (!binaryInput20) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput20 });
        setResult20(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput20]);




  const handleButtonClick = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-dieharder/", {
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
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
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
      fetch("http://localhost:8000/pdf-report-dieharder/", {
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
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
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
      fetch("http://localhost:8000/pdf-report-dieharder/", {
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
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
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
      fetch("http://localhost:8000/pdf-report-dieharder/", {
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
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
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
      fetch("http://localhost:8000/pdf-report-dieharder/", {
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
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
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
      fetch("http://localhost:8000/pdf-report-dieharder/", {
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
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
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
      fetch("http://localhost:8000/pdf-report-dieharder/", {
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
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
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
      fetch("http://localhost:8000/pdf-report-dieharder/", {
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
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
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
      fetch("http://localhost:8000/pdf-report-dieharder/", {
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
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
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
      fetch("http://localhost:8000/pdf-report-dieharder/", {
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
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
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

  const handleButtonClick11 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput11 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput11 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick12 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput12 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput12 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick13 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput13 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput13 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick14 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput14 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput14 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick15 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput15 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput15 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };


  const handleButtonClick16 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput16 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput16 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick17 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput17 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput17 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick18 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput18 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput18 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick19 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput19 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput19 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating graph:", error));
    }
  };

  const handleButtonClick20 = (type) => {
    if (type === "report") {
      fetch("http://localhost:8000/pdf-report-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput20 }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        })
        .catch((error) => console.error("Error generating report:", error));
    } else if (type === "graph") {
      fetch("http://localhost:8000/graph-generaion-dieharder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ binary_data: binaryInput20 }),
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
      <Header title="Dieharder Tests" />
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
              <th style={{ width: "60%" }}>Upload File</th>
              <th style={{ width: "30%" }}>Result</th>
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
              <td>{result}</td>
              {/* <td>{binaryInput}</td> */}
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
              <td>{result2}</td>
              {/* <td>{binaryInput2}</td> */}
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
              <td>{result3}</td>
              {/* <td>{binaryInput}</td> */}
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
              <td>{result4}</td>
              {/* <td>{binaryInput}</td> */}
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
              <td>{result5}</td>
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
              <td>{result6}</td>
              {/* <td>{binaryInput}</td> */}
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
              <td>{result7}</td>
              {/* <td>{binaryInput}</td> */}
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
              <td>{result8}</td>
              {/* <td>{binaryInput}</td> */}
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
              <td>{result9}</td>
              {/* <td>{binaryInput}</td> */}
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
              <td>{result10}</td>
              {/* <td>{binaryInput}</td> */}
            </tr>


            <tr>
              <td>11</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload11}
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
                      ref={fileInputRef11}
                      style={{ display: "none" }}
                      onChange={handleFileChange11}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick11("graph")}
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
                        onClick={() => handleButtonClick11("report")}
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
              <td>{result11}</td>
              {/* <td>{binaryInput}</td> */}
            </tr>

            <tr>
              <td>12</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload12}
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
                      ref={fileInputRef12}
                      style={{ display: "none" }}
                      onChange={handleFileChange12}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick12("graph")}
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
                        onClick={() => handleButtonClick12("report")}
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
              <td>{result12}</td>
              {/* <td>{binaryInput}</td> */}
            </tr>

            <tr>
              <td>13</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload13}
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
                      ref={fileInputRef13}
                      style={{ display: "none" }}
                      onChange={handleFileChange13}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick13("graph")}
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
                        onClick={() => handleButtonClick13("report")}
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
              <td>{result13}</td>
              {/* <td>{binaryInput}</td> */}
            </tr>

            <tr>
              <td>14</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload14}
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
                      ref={fileInputRef14}
                      style={{ display: "none" }}
                      onChange={handleFileChange14}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick14("graph")}
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
                        onClick={() => handleButtonClick14("report")}
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
              <td>{result14}</td>
              {/* <td>{binaryInput}</td> */}
            </tr>

            <tr>
              <td>15</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload15}
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
                      ref={fileInputRef15}
                      style={{ display: "none" }}
                      onChange={handleFileChange15}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick15("graph")}
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
                        onClick={() => handleButtonClick15("report")}
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
              <td>{result15}</td>
              {/* <td>{binaryInput}</td> */}
            </tr>

            <tr>
              <td>16</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload16}
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
                      ref={fileInputRef16}
                      style={{ display: "none" }}
                      onChange={handleFileChange16}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick16("graph")}
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
                        onClick={() => handleButtonClick16("report")}
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
              <td>{result16}</td>
              {/* <td>{binaryInput}</td> */}
            </tr>

            <tr>
              <td>17</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload17}
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
                      ref={fileInputRef17}
                      style={{ display: "none" }}
                      onChange={handleFileChange17}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick17("graph")}
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
                        onClick={() => handleButtonClick17("report")}
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
              <td>{result17}</td>
              {/* <td>{binaryInput}</td> */}
            </tr>

            <tr>
              <td>18</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload18}
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
                      ref={fileInputRef18}
                      style={{ display: "none" }}
                      onChange={handleFileChange18}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick18("graph")}
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
                        onClick={() => handleButtonClick18("report")}
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
              <td>{result18}</td>
              {/* <td>{binaryInput}</td> */}
            </tr>

            <tr>
              <td>19</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload19}
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
                      ref={fileInputRef19}
                      style={{ display: "none" }}
                      onChange={handleFileChange19}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick19("graph")}
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
                        onClick={() => handleButtonClick19("report")}
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
              <td>{result19}</td>
              {/* <td>{binaryInput}</td> */}
            </tr>

            <tr>
              <td>20</td>
              <td>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt="10px" gap="10px">
                  <Box display="flex" justifyContent="center" gap="20px">
                    <Button
                      variant="contained"
                      onClick={handleFileUpload20}
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
                      ref={fileInputRef20}
                      style={{ display: "none" }}
                      onChange={handleFileChange20}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick20("graph")}
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
                        onClick={() => handleButtonClick20("report")}
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
              <td>{result20}</td>
              {/* <td>{binaryInput}</td> */}
            </tr>

          </tbody>
        </Box>
      </Box>


    </Box>
  );
};

export default Team;
