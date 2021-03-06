import * as React from "react";
import { Speed } from "../AlgoSimPlayer";

import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";

function valuetext(value: number) {
	switch (value) {
		case Speed.SLOW:
			return "Slow";

		case Speed.NORMAL:
			return "Normal";

		case Speed.FAST:
			return "Fast";

		case Speed.FASTER:
			return "Faster";

		case Speed.FASTERER:
			return "Faster-er";

		case Speed.FASTEST:
			return "Ludicrous";
	}
	return "Intermediate";
}

const SameLine = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	flexWrap: "nowrap",
	alignItems: "center",
}));

type SortingSpeedBarProps = {
	run_state: boolean;
	speed: Speed;
	lud_speeds: boolean;
	handle_speed_change(event: Event, value: number | Array<number>): void;
};
export default function SortingSpeedBar(props: SortingSpeedBarProps) {
	const marks = [
		{
			value: Speed.SLOW,
		},
		{
			value: Speed.NORMAL,
		},
		{
			value: Speed.FAST,
		},
		{
			value: Speed.FASTER,
		},
		{
			value: Speed.FASTERER,
		},
		{
			value: Speed.FASTEST,
		},
	];

	return (
		<Box sx={{ width: "100%", marginTop: "10px", padding: "0.5% 5%" }}>
			<SameLine>
				<SpeedRoundedIcon fontSize="medium" sx={{ marginRight: "12px" }} />

				<Slider
					aria-label="Speed"
					value={props.speed}
					valueLabelDisplay="auto"
					getAriaValueText={valuetext}
					valueLabelFormat={valuetext}
					step={null}
					marks={marks}
					min={props.lud_speeds ? Speed.FASTEST : Speed.FASTERER}
					max={Speed.SLOW}
					onChange={props.handle_speed_change}
					disabled={props.run_state}
					color="primary"
				/>

				<SpeedRoundedIcon fontSize="large" sx={{ marginLeft: "12px" }} />
			</SameLine>
		</Box>
	);
}
