import * as React from 'react';

export default function App() {
  const AvatarLibrary: React.FC<{}> = () => {
    const avatarLibraries = [
      {
        id: 'initials',
        name: 'Initials',
        url: 'https://avatars.dicebear.com/api/initials/',
      },
      {
        id: 'avataars',
        name: 'Avataars',
        url: 'https://avatars.dicebear.com/api/avataaars/',
      },
      {
        id: 'pixel-art',
        name: 'Pixel Art',
        url: 'https://avatars.dicebear.com/api/pixel-art/',
      },
      {
        id: 'identicon',
        name: 'Identicon',
        url: 'https://avatars.dicebear.com/api/identicon/',
      },
      {
        id: 'bottts',
        name: 'Bottts',
        url: 'https://avatars.dicebear.com/api/bottts/',
      },
    ];
    return (
      <div>
        <form>
          <div>
            {avatarLibraries.map((l) => (
              <Library
                key={l.id}
                id={l.id}
                name={l.name}
                url={l.url}
                isInitials={l.url.endsWith('initials/')}
              />
            ))}
          </div>
        </form>
      </div>
    );
  };

  const Library: React.FC<{
    id: string;
    name: string;
    url: string;
    isInitials: boolean;
  }> = ({ id, name, url, isInitials }) => {
    const [fontSize, setFontSize] = React.useState(45);
    const [scale, setScale] = React.useState(75);
    return (
      <div>
        <div style={{ display: 'flex', gap: '5px', 'column-gap': '5px' }}>
          <input
            type="number"
            min="0"
            max={isInitials ? '100' : '200'}
            step="5"
            value={isInitials ? fontSize : scale}
            onChange={(e) =>
              isInitials
                ? setFontSize(+e.target.value)
                : setScale(+e.target.value)
            }
          />
          <label htmlFor={id}>
            <b>{name}</b>
          </label>
        </div>
        <div style={{ display: 'flex', gap: '5px', 'column-gap': '5px' }}>
          <Avatar
            imageSize={40}
            url={
              isInitials
                ? `${url}jimi-hendrix.svg?fontSize=${fontSize}`
                : `${url}jimi-hendrix.svg?scale=${scale}`
            }
          />
          <Avatar
            imageSize={40}
            url={
              isInitials
                ? `${url}sharon-jones.svg?fontSize=${fontSize}`
                : `${url}sharon-jones.svg?scale=${scale}`
            }
          />
          <Avatar
            imageSize={40}
            url={
              isInitials
                ? `${url}macy-gray.svg?fontSize=${fontSize}`
                : `${url}macy-gray.svg?scale=${scale}`
            }
          />
          <Avatar
            imageSize={40}
            url={
              isInitials
                ? `${url}tom-petty.svg?fontSize=${fontSize}`
                : `${url}tom-petty.svg?scale=${scale}`
            }
          />
          <Avatar
            imageSize={40}
            url={
              isInitials
                ? `${url}paul-mccartney.svg?fontSize=${fontSize}`
                : `${url}paul-mccartney.svg?scale=${scale}`
            }
          />
          <Avatar
            imageSize={40}
            url={
              isInitials
                ? `${url}john-lennon.svg?fontSize=${fontSize}`
                : `${url}john-lennon.svg?scale=${scale}`
            }
          />
          <Avatar
            imageSize={40}
            url={
              isInitials
                ? `${url}george-harrison.svg?fontSize=${fontSize}`
                : `${url}george-harrison.svg?scale=${scale}`
            }
          />
          <Avatar
            imageSize={40}
            url={
              isInitials
                ? `${url}ringo-starr.svg?fontSize=${fontSize}`
                : `${url}ringo-starr.svg?scale=${scale}`
            }
          />
          <Avatar
            imageSize={40}
            url={
              isInitials
                ? `${url}neil-young.svg?fontSize=${fontSize}`
                : `${url}neil-young.svg?scale=${scale}`
            }
          />
          <Avatar
            imageSize={40}
            url={
              isInitials
                ? `${url}willie-nelson.svg?fontSize=${fontSize}`
                : `${url}willie-nelson.svg?scale=${scale}`
            }
          />
        </div>
      </div>
    );
  };

  const Avatar: React.FC<{
    url?: string;
    name?: string;
    size?: number;
    imageSize?: number;
  }> = ({ url, name, size = 40, imageSize }) => {
    const userMask = React.useMemo(
      () => 'data:image/svg+xml;base64,' + btoa(UserMask()),
      []
    );

    return (
      <div
        style={{
          width: `${size}px`,
          minWidth: `${size}px`,
          height: `${size}px`,
          minHeight: `${size}px`,
          maskImage: `url(${userMask})`,
          maskRepeat: 'no-repeat',
          maskSize: `${size}px`,
          WebkitMaskImage: `url(${userMask})`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: `${size}px`,
          background: `#8080805c`,
        }}
      >
        <img
          alt={name}
          className="w-full h-full"
          src={url}
          style={{
            width: `${imageSize}px`,
          }}
        />
      </div>
    );
  };

  const UserMask = () => {
    return `
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M33.513 9.54162C29.6256 4.87337 27.6819 2.53924 25.5223 1.40519C21.859 -0.518443 17.4724 -0.464047 13.8579 1.54983C11.727 2.73709 9.82998 5.13364 6.03589 9.92675C2.88827 13.9032 1.31446 15.8914 0.633429 17.9268C-0.525049 21.3892 -0.0797039 25.1878 1.84821 28.2884C2.98157 30.1111 4.96041 31.6718 8.91808 34.7931C12.0275 37.2455 13.5823 38.4717 15.2398 39.1313C18.054 40.2512 21.1832 40.2896 24.0239 39.2389C25.6971 38.62 27.2931 37.4235 30.485 35.0306C34.743 31.8383 36.8721 30.2421 38.0686 28.3713C40.0955 25.2023 40.555 21.278 39.3149 17.7265C38.5829 15.6299 36.8929 13.6005 33.513 9.54162Z"
          fill="#000000"
        />
      </svg>
    `;
  };

  return (
    <div>
      <AvatarLibrary></AvatarLibrary>
    </div>
  );
}
