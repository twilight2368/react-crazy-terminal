import Banner from "./banner";
import ErrorDisplay from "./error";
import DisplayHelp from "./help";
import HistoryDisplay from "./history";
import DateDisplay from "./date";
import NeoFetch from "./neo";
import LocationDisplay from "./position";
import AboutMe from "./aboutme";

export default function ResultCommand(props) {
  const commandList = [
    {
      command: "banner",
      comment: "Display the super cool banner",
    },
    {
      command: "neofetch",
      comment: "Display the details about project",
    },
    { command: "aboutme", comment: "About the creator" },
    { command: "date", comment: "Get current time" },
    { command: "position", comment: "Get your coordinates" },
    { command: "history", comment: "Display all your previous commands" },
    {
      command: "help",
      comment: "You obviously already know what this does",
    },
    { command: "clear", comment: "Clear the terminal" },
  ];
  function ChooseDisplay(command) {
    switch (command.toLowerCase()) {
      case commandList[0].command:
        return (
          <>
            <Banner />
          </>
        );
        break;

      case commandList[1].command:
        return (
          <>
            <NeoFetch />
          </>
        );
        break;
      case commandList[2].command:
        return (
          <>
            <AboutMe />
          </>
        );
        break;

      case commandList[3].command:
        return (
          <>
            <DateDisplay />
          </>
        );
        break;
      case commandList[4].command:
        return (
          <>
            <LocationDisplay />
          </>
        );
        break;

      case commandList[5].command:
        return (
          <>
            <HistoryDisplay history={props.history} />
          </>
        );
        break;

      case commandList[6].command:
        return (
          <>
            <DisplayHelp commandList={commandList} />
          </>
        );
        break;
      default:
        if (command.length === 0) {
           return<></>
        }else{
          return (
            <>
              <ErrorDisplay />
            </>
          );
        }
        break;
    }
  }
  return <>{ChooseDisplay(props.command.trim())}</>;
}
