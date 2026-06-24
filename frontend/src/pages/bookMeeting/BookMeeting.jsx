import Cal from "@calcom/embed-react";

export default function BookMeeting() {
  return (
    <Cal
      calLink="lakshya-yadav-raocoding"
      style={{width:"100%",height:"100%"}}
      config={{layout:"month_view"}}
    />
  );
}