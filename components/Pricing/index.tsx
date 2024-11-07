import React from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f0f0f; /* Dark background */
  color: #fff;
  min-height: 100vh;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1000px;
  width: 100%;
`;

const Card = styled.div`
  background-color: #1c1c1c; /* Slightly lighter background for cards */
  border: 1px solid #333;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #d9d9d9;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  font-size: 1.5rem;
  margin-right: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #cfcfcf;
`;

const QuantumAIPlatform = () => {
  return (
    <Container>
      <Title>Quantum AI Trading Platform</Title>
      <Grid>
        <Card>
          <CardTitle>
            <Icon>📈</Icon> Revolutionary Predictive Analytics
          </CardTitle>
          <Description>
            Experience unparalleled accuracy in market forecasting with our platform's advanced predictive analytics, empowering users to anticipate market movements and make strategic decisions confidently.
          </Description>
        </Card>

        <Card>
          <CardTitle>
            <Icon>✋</Icon> AI-powered Risk Management
          </CardTitle>
          <Description>
            Harness the power of artificial intelligence to manage risk and protect your investments effectively. Quantum AI platform uses AI-driven risk management algorithms to minimize downside risk while maximizing upside potential.
          </Description>
        </Card>

        <Card>
          <CardTitle>
            <Icon>📊</Icon> Personalized Trading Strategies
          </CardTitle>
          <Description>
            Tailored to your individual preferences and risk tolerance, our platform offers personalized trading strategies created by industry experts. Quantum AI adapts to your needs and helps you achieve your financial goals, whether you're a beginner or an experienced trader.
          </Description>
        </Card>

        <Card>
          <CardTitle>
            <Icon>🔒</Icon> Secure and Transparent Transactions
          </CardTitle>
          <Description>
            Rest assured that your transactions on our AI trading platform are secure and transparent. We prioritize the highest standards of security and transparency, using advanced encryption technology to protect your assets and data.
          </Description>
        </Card>

        <Card>
          <CardTitle>
            <Icon>🤝</Icon> Seamless Usability
          </CardTitle>
          <Description>
            Enjoy a seamless and intuitive trading experience with our easy-to-use interface and intuitive features. From account setup to trade execution, our platform is designed to streamline the trading process so you can focus on what matters most: maximizing your profits.
          </Description>
        </Card>
      </Grid>
    </Container>
  );
};

export default QuantumAIPlatform;