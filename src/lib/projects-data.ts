import newlandsBathroomWide from "@/assets/project-newlands-bathroom-wide.png";
import newlandsFlooringRoom from "@/assets/project-newlands-flooring-room.png";
import newlandsBathroomMosaic from "@/assets/project-newlands-bathroom-mosaic.png";
import newlandsFlooringLounge from "@/assets/project-newlands-flooring-lounge.png";
import newlandsShowerTiling from "@/assets/project-newlands-shower-tiling.png";
import newlandsBathroomDetail from "@/assets/project-newlands-bathroom-detail.png";
import chiredziReceptionWide from "@/assets/project-chiredzi-reception-wide.png";
import chiredziReception from "@/assets/project-chiredzi-reception.png";
import chiredziReceptionDetail from "@/assets/project-chiredzi-reception-detail.png";
import chiredziWaiting from "@/assets/project-chiredzi-waiting.png";
import chiredziConsultation from "@/assets/project-chiredzi-consultation.png";
import chiredziClinicOffice from "@/assets/project-chiredzi-clinic-office.png";
import kadomaLivingAutomation from "@/assets/project-kadoma-living-automation.png";
import kadomaLivingWaveCurtains from "@/assets/project-kadoma-living-wave-curtains.png";
import kadomaDiningLighting from "@/assets/project-kadoma-dining-lighting.png";
import kadomaLoungeCurtains from "@/assets/project-kadoma-lounge-curtains.png";
import kadomaBedroom from "@/assets/project-kadoma-bedroom.png";
import cbzSelousOffice from "@/assets/project-cbz-selous-office.png";
import cbzSelousFrostingRoom from "@/assets/project-cbz-selous-frosting-room.png";
import cbzSelousFrostingDetail from "@/assets/project-cbz-selous-frosting-detail.png";
import cbzSelousCorridor from "@/assets/project-cbz-selous-corridor.png";
import machibayaLoungeWide from "@/assets/project-machibaya-lounge-wide.png";
import machibayaLounge from "@/assets/project-machibaya-lounge.png";
import machibayaCurtains from "@/assets/project-machibaya-curtains.png";
import machibayaBedroom from "@/assets/project-machibaya-bedroom.png";
import murambiReception from "@/assets/project-murambi-reception.png";
import murambiReceptionAlt from "@/assets/project-murambi-reception-alt.png";
import murambiGlassRoom from "@/assets/project-murambi-glass-room.png";
import murambiDeskPartition from "@/assets/project-murambi-desk-partition.png";
import murambiGlassPartition from "@/assets/project-murambi-glass-partition.png";
import murambiInstallation from "@/assets/project-murambi-installation.png";
import murambiPartitionsBuild from "@/assets/project-murambi-partitions-build.png";
import greendaleKitchen from "@/assets/project-greendale-kitchen.png";
import greendaleKitchenDetail from "@/assets/project-greendale-kitchen-detail.png";
import greendaleKitchenBlinds from "@/assets/project-greendale-kitchen-blinds.png";
import greendaleBedroom from "@/assets/project-greendale-bedroom.png";
import greendaleLiving from "@/assets/project-greendale-living.png";
import greendaleBathroom from "@/assets/project-greendale-bathroom.png";
import greendaleBathroomBlinds from "@/assets/project-greendale-bathroom-blinds.png";
import greendaleKitchenBuild from "@/assets/project-greendale-kitchen-build.png";
import chimukaBoardroom from "@/assets/project-chimuka-boardroom.png";
import chimukaLibrary from "@/assets/project-chimuka-library.png";
import chimukaLounge from "@/assets/project-chimuka-lounge.png";
import umwinsidaleLiving from "@/assets/project-umwinsidale-living.png";
import umwinsidaleBedroom from "@/assets/project-umwinsidale-bedroom.png";
import umwinsidaleVerandaInterior from "@/assets/project-umwinsidale-veranda-interior.png";
import umwinsidaleVerandaBlinds from "@/assets/project-umwinsidale-veranda-blinds.png";
import umwinsidaleVerandaExterior from "@/assets/project-umwinsidale-veranda-exterior.png";
import christonLiving from "@/assets/project-christon-living.png";
import christonOffice from "@/assets/project-christon-office.png";
import christonOfficeDesk from "@/assets/project-christon-office-desk.png";
import christonWindow from "@/assets/project-christon-window.png";

export type Project = {
  id: string;
  img: string;
  images: string[];
  title: string;
  /** Primary label shown on project cards. */
  cat: string;
  /** All filter categories this project appears under. Defaults to [cat]. */
  categories?: string[];
  location?: string;
  year?: string;
  description: string;
  scope: string[];
  span?: string;
  /** Shown in the homepage Featured Work grid (max 4). */
  featuredOnHome?: boolean;
};

export function projectMatchesCategory(project: Project, filter: string): boolean {
  if (filter === "All") return true;
  const cats = project.categories ?? [project.cat];
  return cats.includes(filter);
}

export const projects: Project[] = [
  {
    id: "newlands",
    img: newlandsBathroomWide,
    images: [
      newlandsBathroomWide,
      newlandsFlooringLounge,
      newlandsFlooringRoom,
      newlandsBathroomMosaic,
      newlandsShowerTiling,
      newlandsBathroomDetail,
    ],
    title: "Newlands Project",
    cat: "Renovation",
    location: "Newlands, Harare",
    year: "2026",
    description:
      "Full home renovation with a luxury tiled ensuite and high-gloss hardwood flooring throughout.",
    scope: [
      "Bathroom tiling",
      "Mosaic feature bands",
      "Chrome fixtures & shower",
      "Hardwood flooring",
      "Freestanding bath & vanity",
    ],
    span: "lg:col-span-2 lg:row-span-2",
    featuredOnHome: true,
  },
  {
    id: "greendale-house",
    img: greendaleKitchen,
    images: [
      greendaleKitchen,
      greendaleLiving,
      greendaleBedroom,
      greendaleKitchenBlinds,
      greendaleKitchenDetail,
      greendaleBathroom,
      greendaleBathroomBlinds,
      greendaleKitchenBuild,
    ],
    title: "Greendale House",
    cat: "Residential",
    categories: ["Residential", "Kitchen", "Window Treatments", "Renovation"],
    location: "Greendale, Harare",
    year: "2026",
    description:
      "A contemporary home where modern living meets timeless elegance — sleek kitchen with Premweave roller blinds, kids' room with printed wallpaper and wave curtains, floating bathroom vanities, Greystone Roman blinds in the main bedroom and a refined living area.",
    scope: [
      "Modern kitchen fit-out",
      "Premweave 3% roller blinds",
      "Kids' bedroom wallpaper & wave curtains",
      "Floating bathroom vanities",
      "Printed bathroom roller blinds",
      "Greystone Roman blinds",
      "Walk-in closet",
      "Living area styling",
    ],
    featuredOnHome: true,
  },
  {
    id: "christon-bank",
    img: christonLiving,
    images: [christonLiving, christonOffice, christonOfficeDesk, christonWindow],
    title: "Christon Bank",
    cat: "Office",
    categories: ["Office", "Residential", "Window Treatments"],
    location: "Harare",
    year: "2026",
    description:
      "25mm perforated aluminium Venetian blinds in the kitchen, offices and gym, plus Sunfilter silver-grey curtains in the bedrooms — refined light control with a sleek, contemporary finish.",
    scope: [
      "25mm perforated aluminium Venetians",
      "Kitchen, offices & gym",
      "Sunfilter silver-grey curtains",
      "Bedroom treatments",
      "Light control & ventilation",
    ],
    featuredOnHome: true,
  },
  {
    id: "chiredzi",
    img: chiredziReceptionWide,
    images: [
      chiredziReceptionWide,
      chiredziReception,
      chiredziWaiting,
      chiredziConsultation,
      chiredziClinicOffice,
      chiredziReceptionDetail,
    ],
    title: "Chiredzi Project",
    cat: "Clinical",
    location: "Chiredzi",
    year: "2026",
    description:
      "Complete clinic fit-out for West Road Family Clinic — bespoke reception, branded waiting lounge and consultation suites with botanical murals.",
    scope: [
      "Custom reception desk",
      "Wood-slat feature walls",
      "3D clinic branding",
      "Marble-look floor tiling",
      "Botanical feature murals",
      "Consultation room fit-out",
      "Recessed & pendant lighting",
    ],
  },
  {
    id: "kadoma",
    img: kadomaLivingAutomation,
    images: [
      kadomaLivingAutomation,
      kadomaLivingWaveCurtains,
      kadomaDiningLighting,
      kadomaLoungeCurtains,
      kadomaBedroom,
    ],
    title: "Kadoma Project",
    cat: "Residential",
    categories: ["Residential"],
    location: "Kadoma",
    year: "2026",
    description:
      "Smart home upgrade with motorised wave curtains, wallpaper, TV mounting, ceiling speakers and full automation via smart hub.",
    scope: [
      "Motorised wave curtains & tracks",
      "Wallpaper — kitchen, bedrooms & lounge",
      "Kitchen roller blinds",
      "TV installation",
      "Ceiling speakers",
      "Home automation integration",
      "Smart hub control",
    ],
  },
  {
    id: "cbz-selous",
    img: cbzSelousOffice,
    images: [
      cbzSelousOffice,
      cbzSelousFrostingRoom,
      cbzSelousFrostingDetail,
      cbzSelousCorridor,
    ],
    title: "CBZ Selous Branch — Window Privacy Solutions",
    cat: "Office",
    categories: ["Office", "Window Treatments"],
    location: "Selous, Harare",
    year: "2026",
    description:
      "Custom window frosting on glass partitions and meeting rooms — discreet privacy with a clean, modern corporate finish.",
    scope: [
      "Custom window frosting",
      "Glass partition treatment",
      "Decorative frosted stripes",
      "Meeting room privacy",
      "Corporate office application",
    ],
  },
  {
    id: "chimukamafunga-law",
    img: chimukaBoardroom,
    images: [chimukaBoardroom, chimukaLibrary, chimukaLounge],
    title: "ChimukaMafunga Law Firm — Refined Window Solutions",
    cat: "Office",
    categories: ["Office", "Window Treatments"],
    location: "Harare",
    year: "2026",
    description:
      "Nash Grey total blockout roller blinds and 127mm vertical blinds for Chimuka Mafunga Law Firm — full light control, privacy and a refined corporate finish.",
    scope: [
      "Nash Grey blockout roller blinds",
      "127mm vertical blinds",
      "Boardroom & meeting rooms",
      "Library & reception lounge",
      "Corporate window scheme",
    ],
  },
  {
    id: "murambi-joina-city",
    img: murambiReception,
    images: [
      murambiReception,
      murambiReceptionAlt,
      murambiGlassPartition,
      murambiGlassRoom,
      murambiDeskPartition,
      murambiPartitionsBuild,
      murambiInstallation,
    ],
    title: "Dr. Murambi — Joina City Rooms",
    cat: "Clinical",
    categories: ["Clinical", "Office", "Window Treatments"],
    location: "Joina City, Harare",
    year: "2026",
    description:
      "Turnkey medical suites at Joina City — 3D design, reception, bulkheads, aluminium and glass partitions, custom furniture and window frosting.",
    scope: [
      "3D design & space planning",
      "Reception area fit-out",
      "Ceiling bulkheads & pendant lighting",
      "Drywall partitions",
      "Aluminium & glass partitions",
      "Customised furniture",
      "Paint finishes",
      "Window frosting",
    ],
  },
  {
    id: "machibaya-residence",
    img: machibayaLoungeWide,
    images: [
      machibayaLoungeWide,
      machibayaLounge,
      machibayaCurtains,
      machibayaBedroom,
    ],
    title: "Mr. Machibaya Residence",
    cat: "Residential",
    categories: ["Residential", "Window Treatments"],
    location: "Harare",
    year: "2026",
    description:
      "Soft cream wave sheers with UV-protection lining (60% blockout) — light-filled rooms that cut glare and protect furnishings.",
    scope: [
      "Soft cream wave sheers",
      "UV-protection lining (60% blockout)",
      "Floor-to-ceiling curtain tracks",
      "Lounge & bedroom treatments",
      "Glare & fade reduction",
    ],
  },
  {
    id: "umwinsidale",
    img: umwinsidaleLiving,
    images: [
      umwinsidaleLiving,
      umwinsidaleBedroom,
      umwinsidaleVerandaInterior,
      umwinsidaleVerandaBlinds,
      umwinsidaleVerandaExterior,
    ],
    title: "Project Umwinsidale",
    cat: "Residential",
    categories: ["Residential", "Window Treatments"],
    location: "Umwinsidale, Harare",
    year: "2026",
    description:
      "Greystone Linen curtains in the living room and bedrooms, Magnolia 25mm aluminium Venetian blinds in the kitchen, and veranda drop-down blinds for privacy and rain protection.",
    scope: [
      "Greystone Linen curtains",
      "25mm aluminium Venetian blinds",
      "Magnolia finish — kitchen",
      "Living room & bedrooms",
      "Veranda drop-down blinds",
    ],
    featuredOnHome: true,
  },
];

export const featuredOnHomeProjects = projects.filter((p) => p.featuredOnHome);

export const projectCategories = [
  "All",
  "Office",
  "Residential",
  "Clinical",
  "Renovation",
  "Kitchen",
  "Window Treatments",
];
