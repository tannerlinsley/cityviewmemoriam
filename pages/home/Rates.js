import React, { Component } from "react";
import styled from "styled-components";
//
import { List, Item } from "../components/Layout";

const Rates = styled.div`
  padding: 8rem 2rem;
  text-align: center;

  .header {
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .subHeader {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .content {
    max-width: 1500px;
    margin: 0 auto 0 auto;
    line-height: 1.65;
    padding: 1rem 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 1rem;

    @media (max-width: 800px) {
      flex-direction: column;
    }
  }

  .column {
    padding: 2rem 2rem;

    :first-child {
      border-right: 1px solid black;

      @media (max-width: 800px) {
        border-right: 0;
      }
    }
  }

  .info {
    font-size: 1rem;
    font-style: italic;
    opacity: 0.7;
  }
`;

export default () =>
  <Rates id="rates">
    <div className="header">Rates</div>
    <div className="content">
      <div className="column">
        <div className="subHeader">
          <strong>Reception</strong>
        </div>
        $995
        <List>
          <Item>Great for Weddings &amp; Anniversaries</Item>
          <Item>Use of the building for 5 hours</Item>
          <Item>Tables and chairs for 80, setup</Item>
          <Item>Linens</Item>
          <Item>One staff member for assistance during event</Item>
        </List>
        <div className="info">
          <br />$100 of that $995 potentially refundable cleaning deposit
          <br />$100 – additional hourly charge
        </div>
      </div>
      <div className="column">
        <div className="subHeader">
          <strong>Gathering</strong>
        </div>
        $495
        <List>
          <Item>Great for family reunions &amp; funeral services</Item>
          <Item>Use of the building for 4 hours</Item>
          <Item>Tables and chairs for 80, setup</Item>
          <Item>Linens</Item>
          <Item>One staff member for assistance during event</Item>
        </List>
        <div className="info">
          <br />$100 of that $495 potentially refundable cleaning deposit
          <br />$100 – additional hourly charge
        </div>
      </div>
    </div>
  </Rates>;