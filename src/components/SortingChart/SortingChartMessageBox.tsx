import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";

import { MessageSet } from "../../scripts/dataset";
import { ColorMap, HIGHLIGHT_TYPE } from "../../scripts/colormap";

const StyledPaper = styled(Paper)(({ theme }) => ({
	width: "90%",
	background: "rgba(12, 12, 12, 0.2)",
	margin: "0 auto",
	padding: "1rem",
	display: "flex",
	flexDirection: "column",
	border: `2px solid ${theme.palette.divider}`,
}));


const highlight_colors = ColorMap;

type SortingChartMessageBoxProps = {
	messages: MessageSet;
	message_ind_history: [number[], HIGHLIGHT_TYPE[]];
};
export default function SortingChartMessageBox(
	props: SortingChartMessageBoxProps
) {
	let msgs = props.message_ind_history[0];
	let hghlghts = props.message_ind_history[1];

	let histry = msgs.map((val, index) => [props.messages[val], highlight_colors[(hghlghts[index])]]);

	const messages = histry.map((val, index) => (
		<React.Fragment key={Math.random()}>
			<ListItem
				sx={{
					padding: "0.5rem 0.5rem",
					margin: {xs: "0.1em 0", md: "0.2em 0"},
					borderLeft: `4px solid ${val[1]}`,
				}}
			>
				<Typography fontSize={{xs: "1rem", md: "1.45em"}}>{ (Array.isArray(val[0])) ? val[0][0] : val[0]}</Typography>
			</ListItem>
			<Divider
				sx={{
					display:
						((index < props.message_ind_history[0].length-1) && (props.message_ind_history[0].length > 1)) ? "initial" : "none",
				}}
			/>
		</React.Fragment>
	));

	return <StyledPaper variant="elevation" elevation={1}>{messages}</StyledPaper>;
}
