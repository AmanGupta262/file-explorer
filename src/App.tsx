import { Folder } from '@/components';

export const App = () => {
  return (
    <div>
      <Folder
        name='file-explorer'
        content={[
          {
            name: 'src',
            content: [
              {
                name: 'components',
                content: [
                  { name: 'folder', content: [{ name: 'folder.tsx' }, { name: 'folder.scss' }] },
                ],
              },
            ],
          },
        ]}
      />
    </div>
  );
};
