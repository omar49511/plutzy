import Card from "@/components/settings/profle/Card";
import ContentProfile from "@/components/settings/profle/ContentProfile";
import ContentSettings from "@/components/settings/profle/ContentSettings";

export default function SettingsProfile() {
  const dataInfo = [
    {
      title: "Imagen de perfil",
      type: <ContentProfile />,
    },
    {
      title: "Ajustes del perfil",
      type: <ContentSettings />,
    },
  ];

  return (
    <div className="max-w-5xl w-full m-auto py-16 pt-20">
      {/* <div className="flex flex-col gap-10">
         {dataInfo.map((data, index) => (
          <Card key={index} title={data.title} type={data.type} />
        ))} 
      </div> */}
      <Card title={"Imagen de perfil"} />
    </div>
  );
}
