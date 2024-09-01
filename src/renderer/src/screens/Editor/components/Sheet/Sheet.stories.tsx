import Sheet from "./Sheet";

export default {
  title: "Sheet",
  component: Sheet,
};

const document: TextDocument = {
  id: "1",
  title: "Document Title",
  content: `Lorem ipsum dolor sit amet, 
  consectetur adipisicing elit. Nisi ex 
  laudantium quo in? Nobis enim quas quo 
  mollitia voluptas non iure, omnis harum 
  rem quasi, tenetur, laborum exercitationem
  rerum ea.`,
  shared: true,
  width: 210,
  height: 297,
};

export const Default = {
  args: {
    document,
  },
};
