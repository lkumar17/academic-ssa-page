import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Sree sarawathi Academy',
  projectId: 'bdyq2fim',
  dataset: 'production',
  plugins: [deskTool()],
  schema: { types: schemas },
});
