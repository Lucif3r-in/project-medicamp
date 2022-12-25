import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import TimerIcon from "@mui/icons-material/Timer";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HandshakeIcon from "@mui/icons-material/Handshake";

export default function CustomizedTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
          mt: 6,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "secondary.main" }}>
            <TimerIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "black", height: "10px" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography sx={{ width: "380px" }}>
            Connect with us. A dedicated Practo Care Assistant will guide you at
            every step
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "black", height: "20px" }} />
          <TimelineDot sx={{ bgcolor: "secondary.main" }}>
            <ArticleIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography sx={{ width: "380px" }}>
            Connect with us. A dedicated Practo Care Assistant will guide you at
            every step
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "black", height: "20px" }} />
          <TimelineDot sx={{ bgcolor: "secondary.main" }}>
            <ArticleIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography sx={{ width: "380px" }}>
            Schedule a consultation with an expert Practo Care Doctor near you
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "black", height: "20px" }} />
          <TimelineDot sx={{ bgcolor: "secondary.main" }}>
            <PersonIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography sx={{ width: "380px" }}>
            Get Diagnosis & Treatment advice from our expert doctors
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "black", height: "20px" }} />
          <TimelineDot sx={{ bgcolor: "secondary.main" }}>
            <HomeWorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography sx={{ width: "380px" }}>
            Choose one of our partner hospitals that meets your requirements
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "black", height: "20px" }} />
          <TimelineDot sx={{ bgcolor: "secondary.main" }}>
            <HandshakeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography sx={{ width: "380px" }}>
            Get complete assistance from Admission to Discharge
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
