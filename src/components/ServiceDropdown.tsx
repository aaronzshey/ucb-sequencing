import {
    SelectContent,
    SelectItem,
    SelectTrigger, SelectValueText, SelectRoot
} from "../components/ui/select";

import { createListCollection } from "@chakra-ui/react";

export function ServiceDropdown() {
    const services = createListCollection({
        items: [
            { key: 1, label: "Cell Line Authentication", value: "cell-line-authentication" },
            { key: 2, label: "DNA Fragment Analysis", value: "dna-fragment-analysis" },
            { key: 3, label: "DNA Normalization", value: "dna-normalization" },
            { key: 4, label: "DNA Quantification", value: "dna-quantification" },
            { key: 5, label: "Nanodroplet Generation", value: "nanodroplet-generation" },
            { key: 6, label: "Nanopore Sequencing", value: "nanopore-sequencing" },
            { key: 7, label: "Open Access Instruments", value: "open-access-instruments" },
            { key: 8, label: "PCR Reaction Cleanup", value: "pcr-reaction-cleanup" },
            { key: 9, label: "Plasmid & Genomic DNA", value: "plasmid-genomic-dna" },
            { key: 10, label: "Sanger Sequencing", value: "sanger-sequencing" },
            { key: 11, label: "Stem Cell Authentication", value: "stem-cell-authentication" },
            { key: 12, label: "Stock Primers (Free)", value: "stock-primers-free" },
        ],
    });

    return (
        <SelectRoot collection={services} size="sm" className="text-black w-[200px] ml-[15px]" style={{ border: "1px solid black" }}>
            <SelectTrigger>
                <SelectValueText placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent className="text-black bg-white">
                {services.items.map((service) => (
                    <SelectItem item={service} key={service.key} className="text-black bg-white">
                        <a href={`/${service.value}`}>{service.label}</a>
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectRoot>
    )
}


