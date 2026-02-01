import { LogoWithBg } from "@/components/logo";

interface DocOgImageProps {
  title: string;
  description?: string;
}

const DocOgImage = ({ title, description }: DocOgImageProps) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#171717",
        border: "1px dashed #262626",
        color: "#fafafa",
        paddingTop: "40px",
        paddingBottom: "76px",
        paddingLeft: "60px",
        paddingRight: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            flexDirection: "column",
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "Geist",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "#a1a1a1",
            }}
          >
            pheralb
          </span>
          <span>Code Blocks</span>
        </h2>
        <LogoWithBg width="52px" height="52px" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Document Title */}
        <h1
          style={{
            fontFamily: "Onest",
            fontSize: "80px",
            fontWeight: "bolder",
            marginTop: "44px",
            marginBottom: "10px",
            lineHeight: "1.1",
          }}
        >
          {title}
        </h1>
        {/* Document Description */}
        <p
          style={{
            fontSize: "32px",
            color: "#a1a1a1",
            margin: "0px",
            fontWeight: "normal",
            fontFamily: "Geist",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default DocOgImage;
