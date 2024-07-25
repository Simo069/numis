import React from "react";
import ContentWrapper from "./ContentWrapper";

const History = ({ content }) => (
  <ContentWrapper title="History of Moroccan Currency">
    <p className="text-gray-600 leading-relaxed">{content}</p>
  </ContentWrapper>
);

export default History;
