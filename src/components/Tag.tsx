import { ElementType, FC, ReactNode } from 'react';

export const TagConfigs: { [key: string]: TagConfig } = {
  BLUE: {
    backgroundColor: '#E9F0FB',
    color: '#174391',
  },
  GREEN: {
    backgroundColor: '#E5F6E8',
    color: '#338646',
  },
  GREY: {
    backgroundColor: '#EEEEEE',
    color: '#616161',
  },
  RED: {
    backgroundColor: '#FDE8E9',
    color: '#A3151A',
  },
  WHITE: {
    backgroundColor: '#FFFFFF',
    color: '#6D7278',
    borderColor: '#EEEEEE',
    fontWeight: 'font-normal',
  },
  YELLOW: {
    backgroundColor: '#FFF1D1',
    color: '#8C6917',
  },
} as const;

interface TagConfig {
  backgroundColor: string;
  color: string;
  borderColor?: string;
  fontWeight?: 'font-normal' | 'font-medium';
}

interface TagProps {
  component?: ElementType;
  config?: TagConfig;
  children?: ReactNode;
}

export const Tag: FC<TagProps> = ({
  component: Component = 'span',
  config = TagConfigs.WHITE,
  children,
}) => {
  return (
    <Component
      className={`rounded border-2 px-1 ${
        config.fontWeight ? config.fontWeight : 'font-medium'
      }`}
      style={{
        backgroundColor: config.backgroundColor,
        color: config.color,
        borderColor: config.borderColor
          ? config.borderColor
          : config.backgroundColor,
      }}
    >
      {children}
    </Component>
  );
};

export const Tags = {
  HIGH: <Tag config={TagConfigs.RED}>High</Tag>,
  MEDIUM: <Tag config={TagConfigs.YELLOW}>Medium</Tag>,
  LOW: <Tag config={TagConfigs.GREY}>Low</Tag>,
  NONE: <Tag>None</Tag>,
} as const;
