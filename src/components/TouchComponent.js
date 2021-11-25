import React, { useState } from "react"
import styled from "styled-components"

const TouchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  align-items: center;
`

const Layer = styled.div`
  font-size: 69px;
  font-weight: 700;
  color: #036EA3;
  z-index: 2;
  white-space: nowrap;
`

const Border = styled.div`
  padding: 5px;
  width: 90%;
  border: 1px solid #00A7AA;
  background-color: #00A7AA;
`

const TouchComponent = ({ title, onClick }) => {
  return (
    <TouchWrapper onClick={onClick}>
      <Layer>{title}</Layer>
      <Border />
    </TouchWrapper>
  )
}

export default TouchComponent
