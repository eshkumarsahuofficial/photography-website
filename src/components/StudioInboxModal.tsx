import React, { useState } from 'react';
import { Enquiry } from '../data/studioData';
import {
  Inbox,
  X,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  CheckCircle,
  Clock,
  Trash2,
  ExternalLink,
  Search,
} from 'lucide-react';

interface StudioInboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  enquiries: Enquiry[];
  onUpdateStatus: (id: string, status: 'new' | 'contacted' | 'booked') => void;
  onDeleteEnquiry: (id: string) => void;
}

export const StudioInboxModal: React.FC<StudioInboxModalProps> = ({
  isOpen,
  onClose,
  enquiries,
  onUpdateStatus,
  onDeleteEnquiry,
}) => {
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'booked'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredEnquiries = enquiries
    .filter((enq) => {
      if (filter === 'all') return true;
      return enq.status === filter;
    })
    .filter((enq) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        enq.fullName.toLowerCase().includes(q) ||
        enq.email.toLowerCase().includes(q) ||
        enq.phone.includes(q) ||
        enq.service.toLowerCase().includes(q)
      );
    });

  const getStatusBadge = (status: Enquiry['status']) => {
    switch (status) {
      case 'new':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
            New Lead
          </span>
        );
      case 'contacted':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 bg-sky-950/60 border border-sky-500/30 px-2 py-0.5 rounded">
            Contacted
          </span>
        );
      case 'booked':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
            Booked
          </span>
        );
    }
  };

  const handleWhatsAppReply = (enq: Enquiry) => {
    const text = `Hello ${enq.fullName}, this is Capture Studio Photography following up on your inquiry for ${enq.service} scheduled around ${enq.preferredDate}. We are excited to assist you!`;
    const cleanPhone = enq.phone.replace(/[^\d]/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Studio Enquiries Inbox"
    >
      <div className="bg-[#141416] border border-[#C8A45C]/40 rounded-3xl w-full max-w-4xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#17171a]">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#C8A45C]/15 text-[#C8A45C] flex items-center justify-center">
              <Inbox className="w-5 h-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl font-bold text-white">Studio Enquiries Inbox</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#C8A45C] text-black">
                  {enquiries.length} Inquiries
                </span>
              </div>
              <p className="text-xs text-[#A6A29A]">
                Real-time booking submissions recorded from your website.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#A6A29A] hover:text-white transition-colors cursor-pointer"
            aria-label="Close Inbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar & Filters */}
        <div className="p-4 sm:px-6 bg-[#1a1a1d] border-b border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-lg border border-white/5">
            {(['all', 'new', 'contacted', 'booked'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setFilter(st)}
                className={`px-3 py-1 text-xs font-semibold rounded-md capitalize transition-colors cursor-pointer ${
                  filter === st
                    ? 'bg-[#C8A45C] text-black shadow-sm'
                    : 'text-[#A6A29A] hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="relative flex-1 sm:max-w-xs">
            <Search className="w-3.5 h-3.5 text-[#A6A29A] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, phone, service..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-black/40 text-white border border-white/10 focus:outline-none focus:border-[#C8A45C]"
            />
          </div>
        </div>

        {/* Enquiries List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredEnquiries.length === 0 ? (
            <div className="py-16 text-center text-[#A6A29A] space-y-2">
              <Inbox className="w-12 h-12 mx-auto text-white/20" />
              <p className="text-sm font-medium text-white">No inquiries found</p>
              <p className="text-xs font-light">
                {searchQuery
                  ? 'Try clearing your search term.'
                  : 'Customer booking submissions will appear here in real time.'}
              </p>
            </div>
          ) : (
            filteredEnquiries.map((enq) => (
              <div
                key={enq.id}
                className="p-5 rounded-2xl bg-[#17171a] border border-white/10 hover:border-white/20 transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <h4 className="font-serif text-lg font-bold text-white">{enq.fullName}</h4>
                    {getStatusBadge(enq.status)}
                  </div>
                  <span className="text-[11px] text-[#A6A29A] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C8A45C]" />
                    {new Date(enq.createdAt).toLocaleDateString('en-IN', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#A6A29A] pt-1">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C8A45C]" />
                    <span className="text-white font-medium">{enq.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-[#C8A45C]" />
                    <span className="text-white truncate">{enq.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C8A45C]" />
                    <span>Target Date: {enq.preferredDate}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-[#E5C98D]/90 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#A6A29A] font-semibold block">
                    Requested Service: <span className="text-white">{enq.service}</span>
                  </span>
                  <p className="text-xs text-[#F5F1E8] font-light leading-relaxed">
                    "{enq.message}"
                  </p>
                </div>

                {/* Actions Bar */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleWhatsAppReply(enq)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-black bg-[#25D366] hover:brightness-110 transition-all flex items-center gap-1.5 cursor-pointer shadow"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Reply</span>
                    </button>

                    <a
                      href={`tel:${enq.phone.replace(/[^\d+]/g, '')}`}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C8A45C]" />
                      <span>Call</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#A6A29A]">Status:</span>
                    <select
                      value={enq.status}
                      onChange={(e) =>
                        onUpdateStatus(enq.id, e.target.value as 'new' | 'contacted' | 'booked')
                      }
                      className="px-2 py-1 text-xs rounded bg-black text-white border border-white/20 cursor-pointer"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="booked">Booked</option>
                    </select>

                    <button
                      onClick={() => onDeleteEnquiry(enq.id)}
                      className="p-1.5 rounded text-[#A6A29A] hover:text-red-400 hover:bg-white/5 transition-colors cursor-pointer"
                      title="Delete Entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-white/10 bg-[#17171a] flex items-center justify-between text-xs text-[#A6A29A]">
          <span>Connected to Studio Client Manager</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
