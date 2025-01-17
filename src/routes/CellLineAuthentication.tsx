import "../App.css";
import {
    Text, For, Box, Button, Center
} from "@chakra-ui/react";

import { Checkbox } from "../components/ui/checkbox"

import Header from "../components/Header";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function CellLineAuthentication() {

    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    const directions = [
        "No infectious or potentially infectious samples may be submitted without first communicating with our staff - and prior to shipping. We have a zero tolerance policy -- for the health and welfare of staff and students. Thank you!",
        "Please use 1.5mL flip-cap (i.e., 'Eppendorf') tubes for submitting samples.",
        "Please write clearly on the sample tubes!",
        "Please write a simple sample name (e.g., your initials and a number) on the top and side of each tube; then on the side of the tube also include your name, the cell line origin (e.g., HEK293, HeLa, MCF-7, etc) and the date submitted -- (we recommend using 'Tough-Tags' or 'Cryo-Babies' labels, but clear writing with alcohol resistant ink is also acceptable).",
        "Sample names need to be unique and cannot have spaces or unusual characters: names on the order form may only include the following punctuation: - + . ( ) { } _ -- we copy and paste from the emailed Excel form you send to ensure accuracy -- so proper naming really helps!",
        "Please submit duplicate samples in case we need to repeat the analysis.",
        "Collect ~1-2 million cells into the aforementioned, labeled 1.5mL tube(s).",
        "Please pellet the cells and remove all of the media -- if you do not -- you may be charged for extra labor!",
        "Snap freeze the cell pellet -- this destroys cell integrity (viability) and allows our staff to open the tubes and begin STR processing immediately.",
        "Please email the order form with all contact and sample information included -- but please enter each sample only once on the submission form (do not enter the duplicate, backup samples on the order form).",
        "Please include a printed copy of the order form with the shipped cells.",
        "Ship cells on dry ice to: UC Berkeley DNA Sequencing Facility, 310 Barker Hall #3202, Berkeley, CA 94720-3202. Phone: 510-642-6383",
        "We will send you a confirmation email upon receipt, and STR analysis takes place on the next Thursday."
    ]

    return (
        <>
            <Header />
            <Center>

                {/* primary header */}
                <Text className="text-4xl p-[15px] ">
                    Human Cell Line Authentication
                </Text>

            </Center>

            {/* secondary header */}
            <Text className="text-3xl p-[15px] ">
                Directions
            </Text>

            <Button onClick={() => reactToPrintFn()} className="border-black border-solid border-2
       bg-gray-100 p-[15px]">Print these directions</Button >
            <Box ref={contentRef}>
                <For each={directions}>
                    {(item, index) =>
                        <Text key={index} style={{ padding: "10px" }}>
                            <Checkbox variant="outline">{item}</Checkbox>
                        </Text>}
                </For>
            </Box>
        </>
    );
}

