import type { LucideIcon } from 'lucide-react';
import {
  AtSign,
  BookText,
  Cloud,
  Code,
  Coffee,
  Dribbble,
  Facebook,
  Github,
  Gitlab,
  Globe,
  Instagram,
  Link as LinkIcon,
  Linkedin,
  MessageCircle,
  Newspaper,
  Pin,
  Rss,
  Twitch,
  Video,
  X,
  Youtube,
} from 'lucide-react';

import type { SocialPlatform } from './types';

export type SocialPlatformOption = {
  id: SocialPlatform;
  label: string;
  icon: LucideIcon;
  placeholder: string;
  kind: 'handle' | 'url';
  buildUrl: (input: string) => string;
  formatHandleForDisplay?: (handle: string) => string;
};

const normalizeHandle = (value: string): string => value.trim().replace(/^@+/, '');

const ensureHttps = (value: string): string => {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed.replace(/^\/+/, '')}`;
};

export const SOCIAL_PLATFORM_OPTIONS: SocialPlatformOption[] = [
  {
    id: 'x',
    label: 'X',
    icon: X,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://x.com/${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => `@${normalizeHandle(h)}`,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: Instagram,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://www.instagram.com/${encodeURIComponent(normalizeHandle(input))}/`,
    formatHandleForDisplay: (h) => `@${normalizeHandle(h)}`,
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    icon: Video,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://www.tiktok.com/@${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => `@${normalizeHandle(h)}`,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    icon: Youtube,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://www.youtube.com/@${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => `@${normalizeHandle(h)}`,
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: Github,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://github.com/${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => `@${normalizeHandle(h)}`,
  },
  {
    id: 'gitlab',
    label: 'GitLab',
    icon: Gitlab,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://gitlab.com/${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => `@${normalizeHandle(h)}`,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: Linkedin,
    placeholder: 'your-handle',
    kind: 'handle',
    buildUrl: (input) => `https://www.linkedin.com/in/${encodeURIComponent(normalizeHandle(input))}/`,
    formatHandleForDisplay: (h) => normalizeHandle(h),
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: Facebook,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://www.facebook.com/${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => normalizeHandle(h),
  },
  {
    id: 'twitch',
    label: 'Twitch',
    icon: Twitch,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://www.twitch.tv/${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => normalizeHandle(h),
  },
  {
    id: 'dribbble',
    label: 'Dribbble',
    icon: Dribbble,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://dribbble.com/${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => normalizeHandle(h),
  },
  {
    id: 'medium',
    label: 'Medium',
    icon: Newspaper,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://medium.com/@${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => `@${normalizeHandle(h)}`,
  },
  {
    id: 'devto',
    label: 'Dev.to',
    icon: Code,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://dev.to/${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => normalizeHandle(h),
  },
  {
    id: 'reddit',
    label: 'Reddit',
    icon: MessageCircle,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://www.reddit.com/user/${encodeURIComponent(normalizeHandle(input))}/`,
    formatHandleForDisplay: (h) => `u/${normalizeHandle(h)}`,
  },
  {
    id: 'pinterest',
    label: 'Pinterest',
    icon: Pin,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://www.pinterest.com/${encodeURIComponent(normalizeHandle(input))}/`,
    formatHandleForDisplay: (h) => normalizeHandle(h),
  },
  {
    id: 'threads',
    label: 'Threads',
    icon: AtSign,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://www.threads.net/@${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => `@${normalizeHandle(h)}`,
  },
  {
    id: 'bluesky',
    label: 'Bluesky',
    icon: Cloud,
    placeholder: 'name.bsky.social',
    kind: 'handle',
    buildUrl: (input) => `https://bsky.app/profile/${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => normalizeHandle(h),
  },
  {
    id: 'mastodon',
    label: 'Mastodon',
    icon: Rss,
    placeholder: '@user@instance.tld',
    kind: 'handle',
    buildUrl: (input) => {
      const raw = input.trim();
      if (!raw) return '';
      if (/^https?:\/\//i.test(raw)) return raw;
      const cleaned = raw.replace(/^@+/, '');
      const [user, instance] = cleaned.split('@');
      if (!user || !instance) return '';
      return `https://${instance}/@${encodeURIComponent(user)}`;
    },
    formatHandleForDisplay: (h) => {
      const cleaned = h.trim().replace(/^@+/, '');
      return cleaned ? `@${cleaned}` : '';
    },
  },
  {
    id: 'substack',
    label: 'Substack',
    icon: BookText,
    placeholder: 'newsletter',
    kind: 'handle',
    buildUrl: (input) => {
      const cleaned = normalizeHandle(input)
        .replace(/^https?:\/\//i, '')
        .replace(/\/.*/, '')
        .replace(/\.substack\.com$/i, '');
      if (!cleaned) return '';
      return `https://${cleaned}.substack.com`;
    },
    formatHandleForDisplay: (h) => normalizeHandle(h).replace(/\.substack\.com$/i, ''),
  },
  {
    id: 'patreon',
    label: 'Patreon',
    icon: AtSign,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://patreon.com/${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => normalizeHandle(h),
  },
  {
    id: 'kofi',
    label: 'Ko-fi',
    icon: Coffee,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://ko-fi.com/${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => normalizeHandle(h),
  },
  {
    id: 'buymeacoffee',
    label: 'Buy Me a Coffee',
    icon: Coffee,
    placeholder: 'yourhandle',
    kind: 'handle',
    buildUrl: (input) => `https://www.buymeacoffee.com/${encodeURIComponent(normalizeHandle(input))}`,
    formatHandleForDisplay: (h) => normalizeHandle(h),
  },
  {
    id: 'website',
    label: 'Website',
    icon: Globe,
    placeholder: 'example.com',
    kind: 'url',
    buildUrl: (input) => ensureHttps(input),
  },
  {
    id: 'custom',
    label: 'Custom URL',
    icon: LinkIcon,
    placeholder: 'https://...',
    kind: 'url',
    buildUrl: (input) => ensureHttps(input),
  },
];

export const getSocialPlatformOption = (
  platform: SocialPlatform | undefined,
): SocialPlatformOption | undefined => {
  if (!platform) return undefined;
  return SOCIAL_PLATFORM_OPTIONS.find((p) => p.id === platform);
};

export const inferSocialPlatformFromUrl = (url: string | undefined): SocialPlatform | undefined => {
  if (!url) return undefined;
  const value = url.toLowerCase();
  if (value.includes('x.com/') || value.includes('twitter.com/')) return 'x';
  if (value.includes('instagram.com/')) return 'instagram';
  if (value.includes('tiktok.com/')) return 'tiktok';
  if (value.includes('youtube.com/') || value.includes('youtu.be/')) return 'youtube';
  if (value.includes('github.com/')) return 'github';
  if (value.includes('gitlab.com/')) return 'gitlab';
  if (value.includes('linkedin.com/')) return 'linkedin';
  if (value.includes('facebook.com/')) return 'facebook';
  if (value.includes('twitch.tv/')) return 'twitch';
  if (value.includes('dribbble.com/')) return 'dribbble';
  if (value.includes('medium.com/')) return 'medium';
  if (value.includes('dev.to/')) return 'devto';
  if (value.includes('reddit.com/')) return 'reddit';
  if (value.includes('pinterest.com/')) return 'pinterest';
  if (value.includes('threads.net/')) return 'threads';
  if (value.includes('bsky.app/')) return 'bluesky';
  if (value.includes('substack.com') || /\.substack\.com/.test(value)) return 'substack';
  if (value.includes('patreon.com/')) return 'patreon';
  if (value.includes('ko-fi.com/')) return 'kofi';
  if (value.includes('buymeacoffee.com/')) return 'buymeacoffee';
  return undefined;
};

export const extractHandleFromUrl = (
  platform: SocialPlatform | undefined,
  url: string | undefined,
): string | undefined => {
  if (!platform || !url) return undefined;
  try {
    const parsed = new URL(ensureHttps(url));
    const path = parsed.pathname.replace(/\/+$/, '');
    const segments = path.split('/').filter(Boolean);

    switch (platform) {
      case 'x':
      case 'instagram':
      case 'github':
      case 'gitlab':
      case 'facebook':
      case 'twitch':
      case 'dribbble':
      case 'devto':
      case 'pinterest':
        return segments[0];
      case 'reddit':
        if (segments[0] === 'u' && segments[1]) return segments[1];
        if (segments[0] === 'user' && segments[1]) return segments[1];
        return undefined;
      case 'linkedin':
        if (segments[0] === 'in' && segments[1]) return segments[1];
        return undefined;
      case 'tiktok':
        if (segments[0]?.startsWith('@')) return segments[0].slice(1);
        if (segments[0] === '@' && segments[1]) return segments[1];
        if (segments[0] === 'share' && segments[1]) return segments[1];
        return segments[0]?.replace(/^@/, '');
      case 'youtube':
        if (segments[0]?.startsWith('@')) return segments[0].slice(1);
        if (segments[0] === 'channel' && segments[1]) return segments[1];
        return undefined;
      case 'threads':
        if (segments[0]?.startsWith('@')) return segments[0].slice(1);
        return undefined;
      case 'bluesky':
        if (segments[0] === 'profile' && segments[1]) return segments[1];
        return undefined;
      case 'substack':
        return parsed.hostname.replace(/\.substack\.com$/i, '');
      case 'mastodon':
        // Prefer @user@instance from hostname + path
        if (segments[0]?.startsWith('@')) return `${segments[0].slice(1)}@${parsed.hostname}`;
        return undefined;
      case 'website':
      case 'custom':
        return url;
    }
  } catch {
    return undefined;
  }
  return undefined;
};

export const getSocialDisplayHandle = (
  platform: SocialPlatform | undefined,
  handle: string | undefined,
): string => {
  if (!platform || !handle) return '';
  const opt = getSocialPlatformOption(platform);
  if (opt?.formatHandleForDisplay) return opt.formatHandleForDisplay(handle);
  return handle.trim();
};

export const buildSocialUrl = (
  platform: SocialPlatform | undefined,
  input: string | undefined,
): string => {
  if (!platform) return '';
  const opt = getSocialPlatformOption(platform);
  if (!opt) return '';
  const raw = (input ?? '').trim();
  if (!raw) return '';
  return opt.buildUrl(raw);
};

export const normalizeSocialHandle = (platform: SocialPlatform | undefined, input: string): string => {
  if (platform === 'mastodon') return input.trim().replace(/^@+/, '');
  if (platform === 'custom' || platform === 'website') return input.trim();
  return normalizeHandle(input);
};
