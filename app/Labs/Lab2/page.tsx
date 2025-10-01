import "./index.css";
import { Container } from 'react-bootstrap'; 
import Lab2ForegroundColors from "./ForegroundColors";
import Lab2BackgroundColors from "./BackgroundColors";
import Lab2Borders from "./Borders";
import Lab2Padding from "./Padding";
import Lab2Margins from "./Margins";
import Lab2Corners from "./Corners";
import Lab2Dimensions from "./Dimensions";
import Lab2Positions from "./Positions";
import Lab2Zindex from "./Zindex";
import Lab2Float from "./Float";
import Lab2GridLayout from "./GridLayout";
import Lab2Flex from "./Flex";
import Lab2ReactIcons from "./ReactIcons";
import BootstrapGrids from "./BootstrapGrids";
import Lab2ScreenSizeLabel from "./ScreenSizeLabel";
import Lab2BootstrapTables from "./BootstrapTables";
import Lab2BootstrapLists from "./BootstrapLists";
import Lab2BootstrapForms from "./BootstrapForms";
import Lab2BootstrapNavigation from "./BootstrapNavigation";

export default function Lab2() {
  return (
    <Container>
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>

      <p>
        Style attribute allows configuring look and feel
        right on the element. Although it&apos;s very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the
          elements of the same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different look and
          feel
        </p>
      </div>


      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>

        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element&apos;s CLASS attribute
        </p>

        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>

      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3<br />
              meaning the descendant of some ancestor.<br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span><br />
              You can combine these relationships to create specific
              styles depending on the document structure
            </p>
          </div>
        </div>
      </div>

      <Lab2ForegroundColors />
      <Lab2BackgroundColors />
      <Lab2Borders />
      <Lab2Padding />
      <Lab2Margins />
      <Lab2Corners />
      <Lab2Dimensions />
      <Lab2Positions />
      <Lab2Zindex />
      <Lab2Float />
      <Lab2GridLayout />
      <Lab2Flex />
      <Lab2ReactIcons />
      <BootstrapGrids />
      <Lab2ScreenSizeLabel />
      <Lab2BootstrapTables />
      <Lab2BootstrapLists />
      <Lab2BootstrapForms />
      <Lab2BootstrapNavigation />


    </Container>
  );
}