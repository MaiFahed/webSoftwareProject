import React, { useState } from 'react';
import AWS from 'aws-sdk';

const UploadImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!selectedFile) {
            alert('Please select a file.');
            return;
        }

        setUploading(true);

        AWS.config.update({
            accessKeyId: '<your-access-key>',
            secretAccessKey: '<your-secret-access-key>',
            region: '<your-region>'
        });

        const s3 = new AWS.S3();
        const fileName = selectedFile.name;
        const s3Params = {
            Bucket: '<your-bucket-name>',
            Key: fileName,
            Body: selectedFile,
            ACL: 'public-read' // Set ACL to public-read if you want the uploaded image to be publicly accessible
        };

        s3.upload(s3Params, function (err, data) {
            if (err) {
                console.log('Error uploading image:', err);
            } else {
                console.log('Image uploaded successfully:', data.Location);
                setSelectedFile(null);
                setUploading(false);
            }
        });
    };

    return (
        <div>
            <h1>Upload Image to S3</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>{uploading ? 'Uploading...' : 'Upload'}</button>
        </div>
    );
};

export default UploadImage;