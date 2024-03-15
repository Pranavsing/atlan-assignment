// Generate.js
import React, { useState, useCallback, useEffect } from "react";
import Lottie from "lottie-react";
import animationAnn from "./animation/animationFeatured.json";
import { createWorker } from "tesseract.js";
import animationLoader from "./animation/animationLoader.json";
function Generate() {
	const [selectedImage, setSelectedImage] = useState();
	const [textResult, setTextResult] = useState("");
	const [isProcessing, setIsProcessing] = useState(false);
	const [showPreview, setShowPreview] = useState(false);
	const [loading, setLoading] = useState(false);
	const worker = createWorker();

	const convertImageToText = async () => {
		if (!selectedImage) return;
		setLoading(true);
		setIsProcessing(true);
		try {
			await worker.load();
			await worker.loadLanguage("eng");
			await worker.initialize("eng");

			const { data } = await worker.recognize(selectedImage);
			setTextResult(data.text);
			setShowPreview(true);
		} catch (error) {
			console.error("Error during image-to-text conversion:", error);
			setTextResult("Error during conversion. Please try again.");
		} finally {
			setLoading(false);
			setIsProcessing(false);
		}
	};

	useEffect(() => {
		convertImageToText();
	}, [selectedImage]);

	const handleChangeImage = (e) => {
		if (e.target.files[0]) {
			setSelectedImage(e.target.files[0]);
			setShowPreview(false);
		} else {
			setSelectedImage(null);
			setTextResult("");
			setShowPreview(false);
		}
	};

	return (
		<div className={`generate-page ${showPreview ? "show-preview" : ""}`}>
			<div>
				{!selectedImage && (
					<Lottie animationData={animationAnn} className="ann" />
				)}
			</div>
			<div className="upload-section">
				<h1>AI Text-From-Image</h1>
				<div className="Appu">
					<p>Gets words in image!</p>
					<div className="input-wrapper">
						<label htmlFor="upload">Upload Image</label>
						<input
							type="file"
							id="upload"
							accept="image/*"
							onChange={handleChangeImage}
						/>
					</div>
          {loading ? (
						<Lottie animationData={animationLoader} />
					) : (
						<div className="result">
							{selectedImage && (
								<div className="box-image">
									<img src={URL.createObjectURL(selectedImage)} alt="thumb" />
								</div>
							)}
							{textResult && (
								<div className="box-p">
									<p>{textResult}</p>
								</div>
							)}
						</div>
					)}

				</div>
			</div>
		</div>
	);
}

export default Generate;
