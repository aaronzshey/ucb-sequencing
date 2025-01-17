import "./App.css";
import {
  Text, Box, HStack, Input, Textarea, VStack, Table
} from "@chakra-ui/react";

import { Field } from "./components/ui/field.tsx";
import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from "./components/ui/file-upload.tsx";

import Header from "./components/Header";

import CaptionCarousel from "./components/CaptionCarousel";

function App() {



  const dropOffLocations = [
    { id: 1, name: "237 Stanley Hall", notes: "second floor cold room, on the left under the bench" },
    { id: 2, name: "5th floor Latimer Hall", notes: "fifth floor, by the freight elevator" },
    { id: 3, name: "136 Weill Hall", notes: "first floor cold room, on the left under the bench" },
    { id: 4, name: "183 Li Ka Shing", notes: "first floor freezer farm, small black refrigerator in the north west corner" },
    { id: 5, name: "317 Barker Hall", notes: "third floor cold room, on the right by the door" },
    { id: 6, name: "329 Innovative Genomics Institute", notes: "third floor cold room, on the left under the bench" },
  ];


  const prices = [
    {
      "id": 1,
      "name": "DNA Normalization",
      "price": "$100/96-well plate",
      "minimum_charge": "-",
      "notes": "-"
    },
    {
      "id": 2,
      "name": "DNA Quantification",
      "price": "$2.50/sample",
      "minimum_charge": "$20/order",
      "notes": "-"
    },
    {
      "id": 3,
      "name": "DNA Sequencing (Sanger)",
      "price": "$5/sample",
      "minimum_charge": "-",
      "notes": "-"
    },
    {
      "id": 4,
      "name": "Fragment Analysis / Genotyping",
      "price": "$2.50/well",
      "minimum_charge": "$20/run",
      "notes": "-"
    },
    {
      "id": 5,
      "name": "Genomic DNA prep",
      "price": "$300/96-well block",
      "minimum_charge": "-",
      "notes": "-"
    },
    {
      "id": 6,
      "name": "Human Cell Line Authentication",
      "price": "$100/cell line",
      "minimum_charge": "-",
      "notes": "-"
    },
    {
      "id": 7,
      "name": "Nanopore Plasmid and Amplicon Sequencing (Rapid barcoding)",
      "price": "$15/sample",
      "minimum_charge": "-",
      "notes": "-"
    },
    {
      "id": 8,
      "name": "Nanopore Plasmid and Amplicon Sequencing (Native barcoding)",
      "price": "$60/sample",
      "minimum_charge": "-",
      "notes": "-"
    },
    {
      "id": 9,
      "name": "PCR Cleanup Beads",
      "price": "$250/50ml",
      "minimum_charge": "-",
      "notes": "-"
    },
    {
      "id": 10,
      "name": "PCR Cleanup by Plate",
      "price": "$115/96-well plate",
      "minimum_charge": "-",
      "notes": "-"
    },
    {
      "id": 11,
      "name": "PCR Cleanup by tube",
      "price": "$3/sample",
      "minimum_charge": "$20/order",
      "notes": "-"
    },
    {
      "id": 12,
      "name": "Plasmid Prep",
      "price": "$160/96-well block",
      "minimum_charge": "-",
      "notes": "including DNA quantification"
    },
    {
      "id": 13,
      "name": "Qubit Assay",
      "price": "$3/sample",
      "minimum_charge": "$20/order",
      "notes": "-"
    },
    {
      "id": 14,
      "name": "QX200 ddPCR System",
      "price": "$110/run",
      "minimum_charge": "-",
      "notes": "-"
    },
    {
      "id": 15,
      "name": "Real-Time qPCR System (CFX96)",
      "price": "$20/run",
      "minimum_charge": "-",
      "notes": "-"
    },
    {
      "id": 16,
      "name": "TapeStation 4200",
      "price": "$20/run",
      "minimum_charge": "-",
      "notes": "must bring your own reagents / tips / tapes"
    }
  ]


  return (
    <>
      <Header />
      {/* nanopore sequencing big banner */}
      <CaptionCarousel />


      {/* intro text */}
      <Text className="p-[15px] bg-gray-100">
        Welcome to the UC Berkeley DNA Sequencing Facility.  As a member of UC Berkeley's
        Research Infrastructure Commons, we provide on-site support for budding entrepreneurs and established labs alike.
        We offer Sanger sequencing, genotyping, high-throughput nucleic acid purification and quantification, PCR reaction cleanup, PCR product size selection,
        human cell line authentication, stem cell validation,
        and both free and paid consultation services. Our open-access instruments (available for a fee)
        include the Bio-Rad CFX96 Touch Real-Time PCR System, the Bio-Rad QX200 Droplet Digital PCR System, and the Agilent Technologies TapeStation 4200.
      </Text>

      {/* pricing */}
      <Table.Root size="md" variant="outline">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader className="font-bold">Service</Table.ColumnHeader>
            <Table.ColumnHeader className="font-bold">Price</Table.ColumnHeader>
            <Table.ColumnHeader className="font-bold">Minimum charge</Table.ColumnHeader>
            <Table.ColumnHeader className="font-bold">Notes</Table.ColumnHeader>

          </Table.Row>
        </Table.Header>
        <Table.Body style={{ backgroundColor: "white" }}>
          {prices.map((price) => (
            <Table.Row key={price.id}>
              <Table.Cell>{price.name}</Table.Cell>
              <Table.Cell>{price.price}</Table.Cell>
              <Table.Cell>{price.minimum_charge}</Table.Cell>
              <Table.Cell>{price.notes}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      {/* locations */}
      <HStack className="p-[15px]">
        <VStack>
          <Text className="font-bold">Drop off locations</Text>
          {/* table */}
          <Table.Root size="md" variant="outline">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader className="font-bold">Building</Table.ColumnHeader>
                <Table.ColumnHeader className="font-bold">Notes</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body style={{ backgroundColor: "white" }}>
              {dropOffLocations.map((loc) => (
                <Table.Row key={loc.id}>
                  <Table.Cell>{loc.name}</Table.Cell>
                  <Table.Cell>{loc.notes}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </VStack>

        <VStack>
          <Text className="font-bold">Pick up locations</Text>
          {/* table */}
          <Table.Root size="md" variant="outline">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader className="font-bold">Building</Table.ColumnHeader>
                <Table.ColumnHeader className="font-bold">Notes</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body style={{ backgroundColor: "white" }}>
              {dropOffLocations.map((loc) => (
                <Table.Row key={loc.id}>
                  <Table.Cell>{loc.name}</Table.Cell>
                  <Table.Cell>{loc.notes}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </VStack>

      </HStack>


      {/* submit your sequence */}

      <VStack>
        <Text className="text-xl text-black"> Submit your DNA sequence: </Text>
        <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={10}>
          <FileUploadDropzone
            label="Drag and drop here to upload"
            description=".png, .jpg up to 5MB"
          />
          <FileUploadList />
        </FileUploadRoot>
      </VStack>

      {/* contact info for out of network */}
      <HStack className="p-[15px] bg-gray-100">
        {/* left side: info */}

        <VStack className="p-0">
          <Text className="text-4xl">
            Bring the power of UC Berkeley to your research.
          </Text>
          <Text className="text-xl">Read a sample report</Text>
        </VStack>

        {/* right side: form*/}

        <Box w="50%" h="50%" className="p-[15px]">
          <Text className="text-2xl">Contact Us!</Text>
          <Field label="Email" required>
            {/* HACK: tailwind can't reach inputs for some reason.  we fall back to the 
            jsx style={{}} prop.  hopefully I can fix this in the future*/}
            <Input placeholder="Enter your email" style={{ border: "1px solid black" }} />
          </Field>
          <Field label="Message" required>
            <Textarea placeholder="How can we empower you? e.g., I need Oski's genome tomorrow!" style={{ border: "1px solid black" }} />
          </Field>
        </Box>
      </HStack>


      {/* pricing in body */}


    </>
  );
}

export default App;
