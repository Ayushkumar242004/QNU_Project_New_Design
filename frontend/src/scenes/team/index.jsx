import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState, useEffect, useRef } from "react";
import axios from "axios"; // Make sure axios is imported
import CircularProgress from '@mui/material/CircularProgress';

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


  useEffect(() => {
    if (!binaryInput) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      try {
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput });
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
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput2 });
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
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput3 });
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
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput4 });
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
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput5 });
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
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput6 });
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
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput7 });
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
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput8 });
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
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput9 });
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
        const response = await axios.post('http://localhost:8000/generate_final_ans/', { binary_data: binaryInput10 });
        setResult10(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput10]);



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
     
    </tbody>
  </Box>
</Box>


    </Box>
  );
};

export default Team;
