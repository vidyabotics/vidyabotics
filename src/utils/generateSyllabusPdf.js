
import { jsPDF } from "jspdf";
import { siteConfig } from "../data/data.js";


const COLOR_INK = [10, 14, 39];
const COLOR_PRIMARY = [67, 97, 238];
const COLOR_ACCENT = [6, 214, 160];
const COLOR_MUTED = [110, 118, 148];
const COLOR_TEXT = [30, 34, 54];
const COLOR_WHITE = [255, 255, 255];


const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 18;



function formatPrice(course) {

  if (!course.price) {
    return "To be announced";
  }

  const price =
    `INR ${course.price.toLocaleString("en-IN")}`;


  if (course.originalPrice) {

    return `${price} (Original INR ${course.originalPrice.toLocaleString("en-IN")})`;

  }


  return price;

}




function drawHeader(doc) {


  doc.setFillColor(...COLOR_INK);

  doc.rect(
    0,
    0,
    PAGE_W,
    34,
    "F"
  );


  doc.setFillColor(...COLOR_ACCENT);

  doc.rect(
    0,
    34,
    PAGE_W,
    1.5,
    "F"
  );



  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(20);

  doc.setTextColor(...COLOR_WHITE);

  doc.text(
    siteConfig.logoText,
    MARGIN,
    16
  );



  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(9);

  doc.setTextColor(
    180,
    190,
    220
  );

  doc.text(
    siteConfig.tagline,
    MARGIN,
    23
  );



  const contact =
    siteConfig.contact;


  doc.setTextColor(
    ...COLOR_WHITE
  );


  doc.text(
    contact.phoneDisplay,
    PAGE_W - MARGIN,
    13,
    {
      align:"right"
    }
  );


  doc.text(
    contact.email,
    PAGE_W - MARGIN,
    18,
    {
      align:"right"
    }
  );


  // doc.text(
  //   `${contact.address.city}, ${contact.address.state}`,
  //   PAGE_W - MARGIN,
  //   24,
  //   {
  //     align:"right"
  //   }
  // );


}




function drawFooter(doc,page,totalPages){


  const y =
    PAGE_H - 14;



  doc.setDrawColor(
    220,
    222,
    232
  );


  doc.line(
    MARGIN,
    y,
    PAGE_W - MARGIN,
    y
  );



  doc.setFont(
    "helvetica",
    "normal"
  );


  doc.setFontSize(8);


  doc.setTextColor(
    ...COLOR_MUTED
  );


  doc.text(
    `${siteConfig.name} | ${siteConfig.contact.email}`,
    MARGIN,
    y + 5
  );


  doc.text(
    `Page ${page} of ${totalPages}`,
    PAGE_W - MARGIN,
    y + 5,
    {
      align:"right"
    }
  );

}





export function generateSyllabusPdf(course){


  const doc =
    new jsPDF({
      unit:"mm",
      format:"a4"
    });



  let y = 46;



  drawHeader(doc);




  // Heading

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(9);

  doc.setTextColor(
    ...COLOR_ACCENT
  );


  doc.text(
    "COURSE SYLLABUS",
    MARGIN,
    y
  );


  y += 8;




  // Title

  doc.setFontSize(22);

  doc.setTextColor(
    ...COLOR_INK
  );


  const titleLines =
    doc.splitTextToSize(
      course.title,
      PAGE_W - MARGIN * 2
    );


  doc.text(
    titleLines,
    MARGIN,
    y
  );


  y += titleLines.length * 9 + 3;





  // Description

  doc.setFont(
    "helvetica",
    "normal"
  );


  doc.setFontSize(10);


  doc.setTextColor(
    ...COLOR_MUTED
  );


  const descriptionLines =
    doc.splitTextToSize(
      course.shortDescription || "",
      PAGE_W - MARGIN * 2
    );


  doc.text(
    descriptionLines,
    MARGIN,
    y
  );


  y += descriptionLines.length * 5 + 10;






  // Details


  const details = [

    ["CATEGORY", course.category],

    ["DURATION", course.duration],

    // ["AGE", course.ageGroup],

    ["MODE", course.mode],

  ];



  const boxWidth =
    (PAGE_W - MARGIN * 2 - 9) / 4;



  details.forEach(
    ([label,value],index)=>{


      const x =
        MARGIN + index * (boxWidth + 3);



      doc.setFillColor(
        244,
        245,
        250
      );


      doc.roundedRect(
        x,
        y,
        boxWidth,
        18,
        2,
        2,
        "F"
      );



      doc.setFontSize(7);

      doc.setTextColor(
        ...COLOR_ACCENT
      );


      doc.text(
        label,
        x + 3,
        y + 6
      );



      doc.setFontSize(8);

      doc.setTextColor(
        ...COLOR_TEXT
      );


      doc.text(
        String(value || "-"),
        x + 3,
        y + 13
      );


    }
  );



  y += 28;





  // Price

  doc.setFont(
    "helvetica",
    "bold"
  );


  doc.setFontSize(11);


  doc.setTextColor(
    ...COLOR_PRIMARY
  );


  doc.text(
    `Course Fee: ${formatPrice(course)}`,
    MARGIN,
    y
  );



  y += 10;




  doc.setDrawColor(
    ...COLOR_ACCENT
  );


  doc.line(
    MARGIN,
    y,
    PAGE_W - MARGIN,
    y
  );



  y += 10;





  // Syllabus

  doc.setFontSize(14);

  doc.setTextColor(
    ...COLOR_INK
  );


  doc.text(
    "Syllabus",
    MARGIN,
    y
  );


  y += 8;




  const syllabus =
    course.syllabus || [];



  syllabus.forEach(
    (item,index)=>{


      const lines =
        doc.splitTextToSize(
          item,
          PAGE_W - MARGIN * 2 - 12
        );



      const height =
        lines.length * 5 + 5;



      if(y + height > PAGE_H - 25){

        doc.addPage();

        drawHeader(doc);

        y = 46;

      }



      doc.setFillColor(
        ...COLOR_PRIMARY
      );


      doc.circle(
        MARGIN + 2,
        y - 1,
        2.5,
        "F"
      );



      doc.setFontSize(8);

      doc.setTextColor(
        ...COLOR_WHITE
      );


      doc.text(
        String(index + 1),
        MARGIN + 2,
        y + 1,
        {
          align:"center"
        }
      );



      doc.setFontSize(10);

      doc.setTextColor(
        ...COLOR_TEXT
      );


      doc.text(
        lines,
        MARGIN + 8,
        y
      );


      y += height;


    }
  );





  // Footer


  const totalPages =
    doc.internal.getNumberOfPages();



  for(
    let page = 1;
    page <= totalPages;
    page++
  ){

    doc.setPage(page);

    drawFooter(
      doc,
      page,
      totalPages
    );

  }




  const fileName =
    `${siteConfig.name.replace(/\s+/g,"-")}-${course.id}-Syllabus.pdf`;



  doc.save(fileName);

}