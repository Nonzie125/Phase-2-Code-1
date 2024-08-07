import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Replace with your Google API key or OAuth token
const API_KEY = 'YOUR_GOOGLE_API_KEY'; // Replace with your API key
const DOCUMENT_ID = '1EWN0qLfAWfgzO1N2P8H5WmrsTx0nMkhp3s-rXVESTNA'; // Replace with your document ID

const FetchGoogleDoc = () => {
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await axios.get(
          `https://docs.googleapis.com/v1/documents/${DOCUMENT_ID}?key=${API_KEY}`
        );
        setDocument(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDocument();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{document.title}</h1>
      <div>
        {document.body.content.map((block, index) => (
          <p key={index}>{block.paragraph.elements.map((element, elemIndex) => (
            <span key={elemIndex}>{element.textRun.content}</span>
          ))}</p>
        ))}
      </div>
    </div>
  );
};

export default FetchGoogleDoc;


const fetch.js = (props: Props) => {
    return null;
};

export default fetch.js;
