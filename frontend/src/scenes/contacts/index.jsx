import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState, useEffect, useRef } from "react";
import axios from "axios"; // Make sure axios is imported
import CircularProgress from '@mui/material/CircularProgress';
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

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
  const [uploadTime11, setUploadTime11] = useState("");
  const [uploadTime12, setUploadTime12] = useState("");
  const [uploadTime13, setUploadTime13] = useState("");
  const [uploadTime14, setUploadTime14] = useState("");
  const [uploadTime15, setUploadTime15] = useState("");
  const [uploadTime16, setUploadTime16] = useState("");
  const [uploadTime17, setUploadTime17] = useState("");
  const [uploadTime18, setUploadTime18] = useState("");
  const [uploadTime19, setUploadTime19] = useState("");
  const [uploadTime20, setUploadTime20] = useState("");

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
  const [fileName11, setFileName11] = useState(""); // New state to store filename
  const [fileName12, setFileName12] = useState(""); // New state to store filename
  const [fileName13, setFileName13] = useState(""); // New state to store filename
  const [fileName14, setFileName14] = useState(""); // New state to store filename
  const [fileName15, setFileName15] = useState(""); // New state to store filename
  const [fileName16, setFileName16] = useState(""); // New state to store filename
  const [fileName17, setFileName17] = useState(""); // New state to store filename
  const [fileName18, setFileName18] = useState(""); // New state to store filename
  const [fileName19, setFileName19] = useState(""); // New state to store filename
  const [fileName20, setFileName20] = useState(""); // New state to store filename


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
    setFileName(selectedFile.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput(textData);
      const currentTime = new Date().toLocaleTimeString();
      setUploadTime(currentTime);
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

    if (selectedFile.size > MAX_STACK_SIZE_ESTIMATE) {
      alert("Warning: The selected file is too large. Please choose a smaller file.");
      return;
    }
    setFileName4(selectedFile.name);

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

  const handleFileChange11 = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // Handle cases where no file is selected

    if (selectedFile.size > MAX_STACK_SIZE_ESTIMATE) {
      alert("Warning: The selected file is too large. Please choose a smaller file.");
      return;
    }
    setFileName11(selectedFile.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput11(textData);
      const currentTime = new Date().toLocaleTimeString();
      setUploadTime11(currentTime);
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
    setFileName12(selectedFile.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput12(textData);
      const currentTime = new Date().toLocaleTimeString();
      setUploadTime12(currentTime);
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
    setFileName13(selectedFile.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput13(textData);
      const currentTime = new Date().toLocaleTimeString();
      setUploadTime13(currentTime);
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
    setFileName14(selectedFile.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput14(textData);
      const currentTime = new Date().toLocaleTimeString();
      setUploadTime14(currentTime);
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
    setFileName15(selectedFile.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput15(textData);
      const currentTime = new Date().toLocaleTimeString();
      setUploadTime15(currentTime);
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
    setFileName16(selectedFile.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput16(textData);
      const currentTime = new Date().toLocaleTimeString();
      setUploadTime16(currentTime);
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
    setFileName17(selectedFile.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput17(textData);
      const currentTime = new Date().toLocaleTimeString();
      setUploadTime17(currentTime);
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
    setFileName18(selectedFile.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput18(textData);
      const currentTime = new Date().toLocaleTimeString();
      setUploadTime18(currentTime);
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
    setFileName19(selectedFile.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput19(textData);
      const currentTime = new Date().toLocaleTimeString();
      setUploadTime19(currentTime);
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
    setFileName20(selectedFile.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryData = e.target.result;
      const byteArray = new Uint8Array(binaryData);
      const decoder = new TextDecoder();
      const textData = decoder.decode(byteArray).trim();

      // Update binaryInput state with new binary data
      setBinaryInput20(textData);
      const currentTime = new Date().toLocaleTimeString();
      setUploadTime20(currentTime);
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
  const [loadingProgress11, setLoadingProgress11] = useState(0);
  const [loadingProgress12, setLoadingProgress12] = useState(0);
  const [loadingProgress13, setLoadingProgress13] = useState(0);
  const [loadingProgress14, setLoadingProgress14] = useState(0);
  const [loadingProgress15, setLoadingProgress15] = useState(0);
  const [loadingProgress16, setLoadingProgress16] = useState(0);
  const [loadingProgress17, setLoadingProgress17] = useState(0);
  const [loadingProgress18, setLoadingProgress18] = useState(0);
  const [loadingProgress19, setLoadingProgress19] = useState(0);
  const [loadingProgress20, setLoadingProgress20] = useState(0);


  useEffect(() => {
    if (!binaryInput) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress(0); // Start loading from 0%

      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); // Increment progress every 500ms until 90%

        const response = await axios.post("http://localhost:8000/generate_final_ans_dieharder/", {
          binary_data: binaryInput,
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
  }, [binaryInput]);


  useEffect(() => {
    if (!binaryInput2) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress2(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress2((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); // Increment progress every 500ms until 90%


        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput2 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress2(100);
        setResult2(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress(0);
      }
    };

    fetchResult();
  }, [binaryInput2]);

  useEffect(() => {
    if (!binaryInput3) return; // Do not fetch if binaryInput is empty
    setLoadingProgress3(0);
    const fetchResult = async () => {
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress3((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput3 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress3(100);
        setResult3(response.data); // Set the response data

      } catch (error) {
        console.error("Error executing generating final answer:", error);
        setLoadingProgress(0);
      }
    };

    fetchResult();
  }, [binaryInput3]);

  useEffect(() => {
    if (!binaryInput4) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress4(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress4((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput4 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress4(100);
        setResult4(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress4(0);
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput4]);

  useEffect(() => {
    if (!binaryInput5) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress5(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress5((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput5 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress5(100);
        setResult5(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress5(0);
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput5]);

  useEffect(() => {
    if (!binaryInput6) return; // Do not fetch if binaryInput is empty
    setLoadingProgress(0);
    const fetchResult = async () => {
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress6((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput6 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress6(100);
        setResult6(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress6(0);
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput6]);

  useEffect(() => {
    if (!binaryInput7) return; // Do not fetch if binaryInput is empty
    setLoadingProgress7(0);
    const fetchResult = async () => {
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress7((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput7 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress7(100);
        setResult7(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress7(0);
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput7]);

  useEffect(() => {
    if (!binaryInput8) return; // Do not fetch if binaryInput is empty
    setLoadingProgress8(0);
    const fetchResult = async () => {
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress8((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput8 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress8(100);
        setResult8(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress8(0);
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput8]);

  useEffect(() => {
    if (!binaryInput9) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress9(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress9((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput9 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress9(100);
        setResult9(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress9(0);
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput9]);

  useEffect(() => {
    if (!binaryInput10) return; // Do not fetch if binaryInput is empty
    setLoadingProgress10(0);
    const fetchResult = async () => {
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress10((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput10 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress10(100);
        setResult10(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress(0);
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput10]);

  useEffect(() => {
    if (!binaryInput11) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress11(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress11((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput11 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress11(100); // Set progress to 100% after response is received

        setResult11(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress11(0);
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
      setLoadingProgress13(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress13((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput13 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress13(100);
        setResult13(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress13(0); 
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput13]);

  useEffect(() => {
    if (!binaryInput14) return; // Do not fetch if binaryInput is empty
    setLoadingProgress14(0); 
    const fetchResult = async () => {
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress14((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); 
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput14 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress14(100);
        setResult14(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress14(0);
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput14]);

  useEffect(() => {
    if (!binaryInput15) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress15(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress15((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput15 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress15(100); // Set progress to 100% after response is received

        setResult15(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress15(0);
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput15]);

  useEffect(() => {
    if (!binaryInput16) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress16(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress16((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput16 });
        setResult16(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress16(100);
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput16]);

  useEffect(() => {
    if (!binaryInput17) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress17(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress17((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); 
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput17 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress17(100); 
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
      setLoadingProgress18(0); 
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress18((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput18 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress18(100); 
        setResult18(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress18(0);
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput18]);

  useEffect(() => {
    if (!binaryInput19) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress19(0);
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress19((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500);
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput19 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress19(100);
        setResult19(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress19(0);
        console.error("Error executing generating final answer:", error);
      }
    };

    fetchResult();
  }, [binaryInput19]);

  useEffect(() => {
    if (!binaryInput20) return; // Do not fetch if binaryInput is empty

    const fetchResult = async () => {
      setLoadingProgress20(0); 
      try {
        let progressInterval = setInterval(() => {
          setLoadingProgress20((prev) => (prev < 90 ? prev + 10 : prev));
        }, 500); 
        
        const response = await axios.post('http://localhost:8000/generate_final_ans_dieharder/', { binary_data: binaryInput20 });
        clearInterval(progressInterval); // Stop the interval
        setLoadingProgress20(100);
        setResult20(response.data); // Set the response data

      } catch (error) {
        setLoadingProgress(0);
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
              <th style={{ width: "30%" }}>Upload File</th>
              <th style={{ width: "20%" }}>Result</th>
              <th style={{ width: "10%" }}>Loading Bar</th>
              <th style={{ width: "10%" }}>Uploading Time</th>
              <th style={{ width: "20%" }}>Filename</th>

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
                    value={loadingProgress11} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress11}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime11 || ""}</td>
              <td>{fileName11 || "No file selected"}</td>
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
                    value={loadingProgress12} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress12}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime12 || ""}</td>
              <td>{fileName12 || "No file selected"}</td>
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
                    value={loadingProgress13} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress13}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime13 || ""}</td>
              <td>{fileName13 || "No file selected"}</td>
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
                    value={loadingProgress14} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress14}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime14 || ""}</td>
              <td>{fileName14 || "No file selected"}</td>
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
                    value={loadingProgress15} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress15}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime15 || ""}</td>
              <td>{fileName15 || "No file selected"}</td>
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
                    value={loadingProgress16} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress16}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime16 || ""}</td>
              <td>{fileName16 || "No file selected"}</td>
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
                    value={loadingProgress17} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress17}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime17 || ""}</td>
              <td>{fileName17 || "No file selected"}</td>
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
                    value={loadingProgress18} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress18}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime18 || ""}</td>
              <td>{fileName18 || "No file selected"}</td>
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
                    value={loadingProgress19} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress19}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime19 || ""}</td>
              <td>{fileName19 || "No file selected"}</td>
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
                    value={loadingProgress20} // Updated progress state
                    size={50}
                    thickness={5}
                    sx={{
                      color: "green",
                    }}
                  />
                  <Typography variant="body2" fontWeight="bold" color="white" mt="5px">
                    {loadingProgress20}%
                  </Typography>
                </Box>
              </td>
              <td>{uploadTime20 || ""}</td>
              <td>{fileName20 || "No file selected"}</td>
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
    sx={{ width: 80, height: "auto", mb: 2,borderRadius: "12px"  }}
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

export default Team;
